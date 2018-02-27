module.exports = function getZerosCount(number, base) {
	let a = [];
	for(let i = 2;i <= base; i++) {
		if(base % i == 0) {
            if(a[i] !== undefined){
                a[i] += 1;
            } else a[i] = 1;

			base = base / i;
			i--;
		}
	}

    let b = [];
    a.forEach((el, index)=>{
        if(el !== undefined)
            b[b.length] = index;
    });

	b = b.map(el => {
        let r = 0;
        for(let n = number; n!==0;r += n)
            n = Math.floor(n/el);
  		return Math.floor(r/a[el]);
	});

	return Math.min.apply(undefined,b);
}
