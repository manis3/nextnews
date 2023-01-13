"use Client";

import TimeAgo from "react-timeago";

type Props = {
  time: string;
};

function Livetime({ time }: Props) {
  return <TimeAgo date={time} />;
}
export default Livetime;
