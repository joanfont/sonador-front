const s=e=>({name:e.name,artist:e.artists?e.artists[0].name:"unknown artist",id:e.id,preview:e.preview_url}),i=(e,t)=>{const n=Math.abs(e.getTime()-t.getTime());return Math.ceil(n/864e5)};export{s as c,i as d};