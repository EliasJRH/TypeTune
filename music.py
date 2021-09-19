import sys
import uuid
from music21 import *

#Convert audio file to separate audio tracks
def sep(file_path, dirr):
    from spleeter import separator
    from spleeter.separator import Separator

    separator = Separator('spleeter:4stems')
    separator.separate_to_file('audio.mp3', dirr)

    print(dirr)

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

if sys.argv[2] == 0:
    sep(sys.argv[1], sys.argv[3])

# sep('music.mp3')