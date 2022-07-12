AFRAME.registerComponent("target", {
    init: function(){
        for(let i = 1; i < 200; i++){
            var id = 'ring${i}';
            var posX = (Math.random()*3000+(-1000));
            var posY = Math.floor(Math.random() * 2+5);
            var posZ = (Math.random()*3000+-1000);
            var pos = {x:posX, y:posY, z:posZ}
            this.createRings(id, pos);
        } 
    },

    createRings : function(id,position){
        var terrainE1 = document.querySelector("#terrain")
        var ringE1 = document.createElement("a-entity")
        var rotation = (Math.random()*180).toString()
        ringE1.setAttribute("id",id)
        ringE1.setAttribute("position",position)
        ringE1.setAttribute("rotation", "0 "+rotation+" 0")
        ringE1.setAttribute("gltf-model", "./assets/models/coin/untitled.gltf");
        terrainE1.appendChild(ringE1)
    }
}

)