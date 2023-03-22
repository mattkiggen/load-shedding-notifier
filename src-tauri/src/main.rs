
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use notify_rust::Notification;

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

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![notify])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
