
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use notify_rust::Notification;
use tauri::{CustomMenuItem, SystemTrayMenu, SystemTray, SystemTrayEvent, AppHandle, Manager};

#[tauri::command]
fn notify() -> bool {
  let result = Notification::new()
      .summary("Loadshedding starting soon ⚠️")
      .body("5 minutes until loadshedding. Please save your work.")
      .timeout(0)
      .show();

  match result {
      Ok(_) => true,
      Err(_) => false
  }
}

fn show_window_on_click(app: &AppHandle) {
    let window = app.get_window("main");

    match window {
        Some(window) => window.show().unwrap(),
        None => println!("Error getting window")
    }
}

fn handle_tray_item_click(id: String) {
    match id.as_str() {
        "quit" => std::process::exit(0),
        _ => {}
    }
}

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let tray_menu = SystemTrayMenu::new().add_item(quit);
    let tray = SystemTray::new().with_menu(tray_menu);

    tauri::Builder::default()
        .system_tray(tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick { .. } => show_window_on_click(app),
            SystemTrayEvent::MenuItemClick { id, .. } => handle_tray_item_click(id),
            _ => {}
        })
        .on_window_event(|event| match event.event() {
          tauri::WindowEvent::CloseRequested { api, .. } => {
            event.window().hide().unwrap();
            api.prevent_close();
          }
          _ => {}
        })
        .invoke_handler(tauri::generate_handler![notify])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
