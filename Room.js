function Room(width,height,walkable){
	this.width = width;
	this.height = height;
	this.sprites = new Array();
	this.walkable = walkable;
	
	this.addSprite = function(sprite){
		this.sprites.push(sprite);
	}
	this.update = function(gameTime){
		var i;
		for(i=0;i<this.sprites.length;i++){
			this.sprites[i].update(gameTime);
		}
	}
	this.draw = function(){
		this.sortDepths();
		var i;
		for(i=0;i<this.sprites.length;i++){
			this.sprites[i].draw();
		}
	}
	
	this.sortDepths = function(){
		//insertion sort?!?
		var i=0;
		var j=0;
		var temp;
		for(i=1,j=1;i<this.sprites.length;i++,j=i){
			temp = this.sprites[j];
			while(j>0 && this.sprites[j].isBehind(this.sprites[j-1])){
				this.sprites[j] = this.sprites[j-1]
				j--;
			}
			this.sprites[j] = temp;
		}
	}
}
