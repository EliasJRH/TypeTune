from spleeter import separator
from spleeter.separator import Separator

separator = Separator('spleeter:2stems')
separator.separate_to_file('audio.mp3', 'output')
