var vectorForce = 10;
var enemyX = 740; 
var enemyY = 0;
var cityHits = 0;
var initEnemyNumber = 5;
var enemyArr;
var enemyCapacityLeft = 10;

function Enemy()
{
	tenemy = new Sprite(scene, "enemy.jpeg", 15, 15);
	tenemy.setSpeed(0);

	enemyY = Math.random() * 450;

	if(enemyY <= 20) 
	{
		enemyY = enemyY + 20;
	}
	if(enemyY >= 430)
	{
		enemyY = enemyY - 20;
	}
	
	tenemy.setPosition(enemyX,enemyY);
	
	tenemy.freefall = function()
	{
		tenemy.addVector(270, vectorForce);
	}

	tenemy.freefall();
	return tenemy;
}

function setupEnemies()
{
	var i;
	enemyArr = new Array(initEnemyNumber);
	for(i = 0; i < enemyArr.length; i++)
	{
		enemyArr[i] = new Enemy();
	}
}

function increaseEnemies()
{
	if((timer.getElapsedTime() % 5) < 0.1)
	{
		var tenemy1 = new Enemy();
		var tenemy2 = new Enemy();
		enemyArr.push(tenemy1);
		enemyArr.push(tenemy2);
	}
}

function updateEnemies()
{
	var i;
	for(i = 0; i < enemyArr.length; i++)
	{
		enemyArr[i].update();
	}
}

function baseStopper()
{
	var i;
	for(i = 0; i < enemyArr.length; i++)
	{
		if(enemyArr[i].x <= 7.5)
		{
			enemyArr[i].setSpeed(0);
			enemyArr[i].hide();
			cityHits = cityHits + 1;
			enemyCapacityLeft = enemyCapacityLeft - cityHits;
		}
	}
}

function collisionChecker()
{
	var i;
	var j;
	for(i = 0; i < enemyArr.length; i++)
	{
		for(j = 0; j < missileArray.length; j++)
		{
			if(missileArray[j].collidesWith(enemyArr[i]))
			{
				missileArray[j].hide();
				enemyArr[i].hide();
			}
		}
	}
}