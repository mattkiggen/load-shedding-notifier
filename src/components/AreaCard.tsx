import { Card, Heading, CardBody, CardFooter, Text } from '@chakra-ui/react';
import { formatTime } from '../core/format';

type Props = {
  areaName: string;
  startDate: string;
  endDate: string;
};

function AreaCard({ areaName, startDate, endDate }: Props) {
  return (
    <Card>
      <CardBody>
        <Heading size='md' mb='8px'>
          {areaName}
        </Heading>
        <Text>Start: {formatTime(new Date(startDate))}</Text>
        <Text>End: {formatTime(new Date(endDate))}</Text>
      </CardBody>
    </Card>
  );
}

export default AreaCard;
