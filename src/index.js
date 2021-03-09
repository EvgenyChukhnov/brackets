module.exports = function check(str, bracketsConfig) {
    let count = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bracketsConfig[0][0]) {
            if (bracketsConfig[0][0] === bracketsConfig[0][1]) {
                if (arr[i] === count[count.length-1]) {
                    count.pop();
                    continue;
                }
            }
          count.push(arr[i])
        } else if (arr[i] === bracketsConfig[0][1]) {
            if (count[count.length - 1] !== bracketsConfig[0][0]) {
              count = 1;
              break;
            };
          count.pop(arr[i])
        } else if (arr[i] === bracketsConfig[1][0]) {
            if (bracketsConfig[1][0] === bracketsConfig[1][1]) {
                if (arr[i] === count[count.length-1]) {
                    count.pop();
                    continue;
                }
            }
          count.push(arr[i])
        } else if (arr[i] === bracketsConfig[1][1]) {
            if (count[count.length - 1] !== bracketsConfig[1][0]) {
              count = 1;
              break
            };
          count.pop(arr[i])
        } else if (arr[i] === bracketsConfig[2][0]) {
            if (bracketsConfig[2][0] === bracketsConfig[2][1]) {
                if (arr[i] === count[count.length-1]) {
                    count.pop();
                    continue;
                }
            }
          count.push(arr[i])
        } else if (arr[i] === bracketsConfig[2][1]) {
            if (count[count.length - 1] !== bracketsConfig[2][0]) {
              count = 1;
              break
            };
          count.pop(arr[i])
        } else if (arr[i] === bracketsConfig[3][0]) {
            if (bracketsConfig[3][0] === bracketsConfig[3][1]) {
                if (arr[i] === count[count.length-1]) {
                    count.pop();
                    continue;
                }
            }
          count.push(arr[i])
        } else if (arr[i] === bracketsConfig[3][1]) {
            if (count[count.length - 1] !== bracketsConfig[3][0]) {
              count = 1;
              break
            };
          count.pop(arr[i])
        } else if (arr[i] === bracketsConfig[4][0]) {
            if (bracketsConfig[4][0] === bracketsConfig[4][1]) {
                if (arr[i] === count[count.length-1]) {
                    count.pop();
                    continue;
                }
            }
          count.push(arr[i])
        } else if (arr[i] === bracketsConfig[4][1]) {
            if (count[count.length - 1] !== bracketsConfig[4][0]) {
              count = 1;
              break
            };
          count.pop(arr[i])
        }
    }

  if (count.length === 0) return true;
    return false;
}
