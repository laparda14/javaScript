var cannonX;
var cannonY;
initMissileNumber = 25;
var missileArray = new Array(initMissileNumber);

function Cannon()
{
	var tcannon = new Sprite(scene, "cannon.jpeg", 50, 50);
	tcannon.setSpeed(0);
	tcannon.setPosition(25,225);
	tcannon.changeImgAngleBy(90);

	tcannon.checkKeys = function()
	{
		if(keysDown[K_UP])
		{
			tcannon.addVector(0,0.3);
		}
		if(keysDown[K_DOWN])
		{
			tcannon.addVector(180,0.3);
		}
	}


	tcannon.boundChecker = function()
	{
		if(tcannon.y <= 25)
		{
			tcannon.addVector(180,(tcannon.getSpeed()) * 1.2);			
		}
		if(tcannon.y >= 425)
		{
			tcannon.addVector(0,(tcannon.getSpeed()) * 1.2);		
		}
	}

	return tcannon;
}
