export default function Hexagon({
  points,
  fill,
  stroke,
  strokeWidth,
}: {
  points: string
  fill: string
  stroke: string
  strokeWidth: string
}) {
  return <polygon points={points} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
}
