//递归 1
function bp1(arr) {
    let arr2 = []
    if (Array.isArray(arr)) {
        arr.forEach(function (item) {
            if (Array.isArray(item)) {
                let temp = bp1(item)
                temp.forEach((item) => arr2.push(item))
            } else {
                arr2.push(item)
            }
        })
    }
    return arr2
}

//递归 2
function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for (let i = 0; i < tree.length; i++) {
            yield* iterTree(tree[i]);
        }
    } else {
        yield tree;
    }
}

function bp2(arr) {
    let arr2=[]
    for (let x of iterTree(arr)) {
        arr2.push(x)
    }
    return arr2
}

//分割
function bp3(arr){
    let arr3=[]
    let arr2=arr.toString().split(',')
    arr2.forEach((item)=>{
        arr3.push(parseInt(item))
    })
    return arr3
}


const arr = [1, 2, [3, 4, [5, 6, [7]]], 8]
console.log(bp1(arr))
console.log(bp2(arr))
console.log(bp3(arr))
