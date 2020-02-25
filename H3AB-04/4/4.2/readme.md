This is the documentation for the Laser Defender game.

### Scenes
The game consists of three scenes: start, game, and game over.

### Start
This scene is shown when the game is first loaded. This scene consists of two buttons: one to start the game and one to quit the game.

### Game
This scene is the main game. It consists of a player character which can be controlled by moving the arrow keys and using space bar to shoot a laser.
Enemies are spawned and they move across the screen shooting lasers at the player.
The player is controlled from Player.cs - this contains all the logic for controlling player movement, firing, sounds and dying.
The enemies are controlled from Enemy.cs - this contains all the logic for controlling their firing and dying.

Enemies are spawned from within EnemySpawner.cs. This file takes a WaveConfig.cs class which contains the data about which enemy to instantiate and where to instantiate them.
WaveConfig.cs in turn takes data from a pathPrefab which tells it what path the enemies will travel in the game and an enemyPrefab which tells it what enemy.

There are various other scripts which control background movement, score keeping, health keeping and removing game objects from memory once they have been destroyed.

### Game Over
This scene is shown when the player dies in the game. It shows them their score, allows them to play again and allows them to send their score to the high score list.
