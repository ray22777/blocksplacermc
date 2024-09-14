time = 0
list2: List[List[number]] = []
length = 0
count = 0
start = False
def worker():
    loops.pause(1000)
    while(start == True):
        bps = int(count/ ((gameplay.time_query(GAME_TIME) - time) / 20))
        player.say("" + str(count) + "/" + ("" + str(length)) + "(" + bps + "bps)" + " ETA: " + int((length-count)/bps)+ "s")
        loops.pause(3000)
def on_on_chat():
    global time, list2, length, count
    player.say("Starting...")
    count = 0
    start = True
    time = gameplay.time_query(GAME_TIME)
    loops.run_in_background(worker)
    position = positions.ground_position(player.position())
    list2 =
    length = len(list2)
    for value in list2:
        blocks.place(value[0],positions.add(position, pos(value[1], value[2], value[3])))
        count += 1
    start = False
    player.say("Completed. (" + (gameplay.time_query(GAME_TIME) - time) / 20 + " seconds.) ( " + str(int(count/ ((gameplay.time_query(GAME_TIME) - time) / 20)) + "bps)"))
player.on_chat("run", on_on_chat)