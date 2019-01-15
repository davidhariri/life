function cutOffString(str, cutOffLength, cutoff = '...') {
  if (str.length > cutOffLength) {
    return str.substring(0, cutOffLength) + cutoff;
  } else {
    return str;
  }
}

export default cutOffString;
