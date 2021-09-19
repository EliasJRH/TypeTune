import sys
from music21 import *

print("yes")

#Convert audio file to separate audio tracks
def sep(file_path):
    from spleeter import separator
    from spleeter.separator import Separator
    
    separator = Separator('spleeter:5stems')
    separator.separate_to_file(file_path, 'output3')

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

