import sys
from music21 import *

#Convert audio file to separate audio tracks
def sep(file_path):
    from spleeter import separator
    from spleeter.separator import Separator
    
    separator = Separator('spleeter:5stems')
    separator.separate_to_file('audio.mp3', 'output')

    print("done")

def to_music_xml(file_path):
    corpus.addPath('.')
    allBach = corpus.parse('file_path')

    partStream = allBach.parts.stream()

    for n in allBach.flat.notes:
        print(n)
        if type(n) is note.Note:
            print(f"Note: {n.pitch.name} {n.pitch.octave} {n.duration.quarterLength}")
        else:
            for c in n.pitches:
                print(f"Note: {c.name} {c.octave}")
            print(n.duration.quarterLength)

# if sys.argv[2] == 0:
#     sep(sys.argv[1])

sep('music.mp3')