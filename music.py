from music21 import *
from spleeter import separator
from spleeter.separator import Separator

separator = Separator('spleeter:2stems')
separator.separate_to_file('shrimplipspooplips.mp3', 'output3')

corpus.addPath('.')
allBach = corpus.parse('./Dead_Half_Way.mxl')

partStream = allBach.parts.stream()

for n in allBach.flat.notes:
    print(n)
    if type(n) is note.Note:
        print(f"Note: {n.pitch.name} {n.pitch.octave} {n.duration.quarterLength}")
    else:
        for c in n.pitches:
            print(f"Note: {c.name} {c.octave}")
        print(n.duration.quarterLength)
