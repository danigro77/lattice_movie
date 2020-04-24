const castData = cast => cast && cast.map(({
  id,
  name,
  gender,
  character,
  order
}) => ({
  id,
  name,
  gender,
  character,
  order,
})).sort((a,b) => a.order < b.order);

export default castData;
