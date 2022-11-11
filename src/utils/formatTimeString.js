const formatTimeString = (string) => {
  const nums = string.split(':');
  const hours = parseInt(nums[0], 10);
  const minutes = parseInt(nums[1], 10);

  return `${hours ? `${hours}h` : ''}${minutes}min`;
};

export default formatTimeString;
