import { Card, Heading, CardBody, CardFooter, Text } from '@chakra-ui/react';
import { formatTime } from '../core/format';

type Props = {
  areaName: string;
  region: string;
  startDate: string;
  endDate: string;
};

function AreaCard({ areaName, region, startDate, endDate }: Props) {
  return (
    <Card>
      <CardBody>
        <Heading size='sm' mb='8px' textTransform='uppercase'>
          {areaName}
        </Heading>
        <Text fontSize='sm'>
          Power off from {formatTime(new Date(startDate))} -{' '}
          {formatTime(new Date(endDate))}
        </Text>
      </CardBody>
    </Card>
  );
}

export default AreaCard;
