missileArraySize = 20;
var missileArray = new Array(missileArraySize);
var shotsLeft = 50;
var fireOperator = true;

function Missile()
{
	var tmissile = new Sprite(scene, "missile.gif", 15, 15);
	tmissile.hide();
	tmissile.setPosition(cannon.x + 35, cannon.y);
	tmissile.setSpeed(0);

	return tmissile;
}

function setMissileArray()
{	
	var i;
	for(i = 0; i < missileArray.length; i++)
	{
		missileArray[i] = new Missile();
	}
}

function fire()
{	
	if(fireOperator == true)
	{
		if(keysDown[K_RIGHT])
		{
			var tmissile = new Missile();
			tmissile.show();
			tmissile.setPosition(cannon.x + 35, cannon.y);
			tmissile.addVector(90,3);
			missileArray.push(tmissile);
			shotsLeft = shotsLeft - 1;
		}
	}
}

function updateMissileArray()
{
	var i;
	for(i = 0; i < missileArray.length; i++)
	{
		missileArray[i].update();
	}

}

function missilesOver()
{
	if(shotsLeft == 0)
	{
		fireOperator = false;
	}
}

function missileDone()
{
	var i;
	for(i = 0; i < missileArray.length; i++)
	{
		if(missileArray[i].x >= 740)
		{
			missileArray[i].hide();
		}
	}
}