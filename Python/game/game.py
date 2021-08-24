# player_name = 'Manuel'
# player_attack = 10
# player_heal = 16
# health = 100

# player = ['Manuel', 10, 16, 100]
# print(player[0])

# print(type(player))

player = {'name': 'Manuel', 'attack': 10, 'heal': 16, 'health': 100}
monster = {'name': 'Max', 'attack': 12, 'health': 100}
print('Please select action')
print('1) Attack')
print('2) Heal')

player_choice = input()
# print(type(player_choice))

if player_choice == '1':
    print('Player Attacks')
    monster['health'] = monster['health'] - player['attack']
    print("Monster's Health:")
    print(monster['health'])
    
    print('Monster Attacks')
    player['health'] = player['health'] - monster['attack']
    print("Player's Health:")
    print(player['health'])

elif player_choice == '2':
    print('Heal')
    player['health'] = player['health'] + player['heal']
    print(player['health'])