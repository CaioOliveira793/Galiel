export const enum Key {
	// these key code are inspired by the GLFW library
	// reference: https://www.glfw.org/docs/3.3/group__keys.html

	SPACE            = 32, //   //
	APOSTROPHE       = 39, // ' //
	COMMA            = 44, // , //
	MINUS            = 45, // - //
	PERIOD           = 46, // . //
	SLASH            = 47, // / //

	DIGIT_0          = 48,
	DIGIT_1          = 49,
	DIGIT_2          = 50,
	DIGIT_3          = 51,
	DIGIT_4          = 52,
	DIGIT_5          = 53,
	DIGIT_6          = 54,
	DIGIT_7          = 55,
	DIGIT_8          = 56,
	DIGIT_9          = 57,

	SEMICOLON        = 59, // ; //
	EQUAL            = 61, // = //

	A                = 65,
	B                = 66,
	C                = 67,
	D                = 68,
	E                = 69,
	F                = 70,
	G                = 71,
	H                = 72,
	I                = 73,
	J                = 74,
	K                = 75,
	L                = 76,
	M                = 77,
	N                = 78,
	O                = 79,
	P                = 80,
	Q                = 81,
	R                = 82,
	S                = 83,
	T                = 84,
	U                = 85,
	V                = 86,
	W                = 87,
	X                = 88,
	Y                = 89,
	Z                = 90,

	LEFT_BRACKET     = 91, // [ //
	BACKSLASH        = 92, // \ //
	RIGHT_BRACKET    = 93, // ] //
	GRAVE_ACCENT     = 96, // ` //

	WORLD_1          = 161, // non-US #1 //
	WORLD_2          = 162, // non-US #2 //

	// Function Keys:
	ESCAPE           = 256,
	ENTER            = 257,
	TAB              = 258,
	BACKSPACE        = 259,
	INSERT           = 260,
	DELETE           = 261,
	RIGHT            = 262,
	LEFT             = 263,
	DOWN             = 264,
	UP               = 265,
	PAGE_UP          = 266,
	PAGE_DOWN        = 267,
	HOME             = 268,
	END              = 269,
	CAPS_LOCK        = 280,
	SCROLL_LOCK      = 281,
	NUM_LOCK         = 282,
	PRINT_SCREEN     = 283,
	PAUSE            = 284,
	F1               = 290,
	F2               = 291,
	F3               = 292,
	F4               = 293,
	F5               = 294,
	F6               = 295,
	F7               = 296,
	F8               = 297,
	F9               = 298,
	F10              = 299,
	F11              = 300,
	F12              = 301,
	F13              = 302,
	F14              = 303,
	F15              = 304,
	F16              = 305,
	F17              = 306,
	F18              = 307,
	F19              = 308,
	F20              = 309,
	F21              = 310,
	F22              = 311,
	F23              = 312,
	F24              = 313,
	F25              = 314,

	// Numpad:
	NUMPAD_0         = 320,
	NUMPAD_1         = 321,
	NUMPAD_2         = 322,
	NUMPAD_3         = 323,
	NUMPAD_4         = 324,
	NUMPAD_5         = 325,
	NUMPAD_6         = 326,
	NUMPAD_7         = 327,
	NUMPAD_8         = 328,
	NUMPAD_9         = 329,
	NUMPAD_DECIMAL   = 330,
	NUMPAD_DIVIDE    = 331,
	NUMPAD_MULTIPLY  = 332,
	NUMPAD_SUBTRACT  = 333,
	NUMPAD_ADD       = 334,
	NUMPAD_ENTER     = 335,
	NUMPAD_EQUAL     = 336,
	NUMPAD_COMMA     = 337,

	LEFT_SHIFT       = 340,
	LEFT_CONTROL     = 341,
	LEFT_ALT         = 342,
	LEFT_SUPER       = 343,
	RIGHT_SHIFT      = 344,
	RIGHT_CONTROL    = 345,
	RIGHT_ALT        = 346,
	RIGHT_SUPER      = 347,
	MENU             = 348
}

export enum KeyCodeMapTable {
	'Space'            = Key.SPACE,
	'Quote'            = Key.APOSTROPHE,
	'Comma'            = Key.COMMA,
	'Minus'            = Key.MINUS,
	'Period'           = Key.PERIOD,
	'Slash'            = Key.SLASH,
	'IntlRo'           = Key.SLASH,

	'Digit0'           = Key.DIGIT_0,
	'Digit1'           = Key.DIGIT_1,
	'Digit2'           = Key.DIGIT_2,
	'Digit3'           = Key.DIGIT_3,
	'Digit4'           = Key.DIGIT_4,
	'Digit5'           = Key.DIGIT_5,
	'Digit6'           = Key.DIGIT_6,
	'Digit7'           = Key.DIGIT_7,
	'Digit8'           = Key.DIGIT_8,
	'Digit9'           = Key.DIGIT_9,

	'Semicolon'        = Key.SEMICOLON,
	'Equal'            = Key.EQUAL,

	'KeyA'             = Key.A,
	'KeyB'             = Key.B,
	'KeyC'             = Key.C,
	'KeyD'             = Key.D,
	'KeyE'             = Key.E,
	'KeyF'             = Key.F,
	'KeyG'             = Key.G,
	'KeyH'             = Key.H,
	'KeyI'             = Key.I,
	'KeyJ'             = Key.J,
	'KeyK'             = Key.K,
	'KeyL'             = Key.L,
	'KeyM'             = Key.M,
	'KeyN'             = Key.N,
	'KeyO'             = Key.O,
	'KeyP'             = Key.P,
	'KeyQ'             = Key.Q,
	'KeyR'             = Key.R,
	'KeyS'             = Key.S,
	'KeyT'             = Key.T,
	'KeyU'             = Key.U,
	'KeyV'             = Key.V,
	'KeyW'             = Key.W,
	'KeyX'             = Key.X,
	'KeyY'             = Key.Y,
	'KeyZ'             = Key.Z,

	'BracketLeft'      = Key.LEFT_BRACKET,
	'Backslash'        = Key.BACKSLASH,
	'IntlBackslash'    = Key.BACKSLASH,
	'BracketRight'     = Key.RIGHT_BRACKET,
	'Backquote'        = Key.GRAVE_ACCENT,

	'not1'             = Key.WORLD_1,
	'not2'             = Key.WORLD_2,

	// Function keys:
	'Escape'           = Key.ESCAPE,
	'Enter'            = Key.ENTER,
	'Tab'              = Key.TAB,
	'Backspace'        = Key.BACKSPACE,
	'Insert'           = Key.INSERT,
	'Delete'           = Key.DELETE,
	'ArrowRight'       = Key.RIGHT,
	'ArrowLeft'        = Key.LEFT,
	'ArrowDown'        = Key.DOWN,
	'ArrowUp'          = Key.UP,
	'PageUp'           = Key.PAGE_UP,
	'PageDown'         = Key.PAGE_DOWN,
	'Home'             = Key.HOME,
	'End'              = Key.END,
	'CapsLock'         = Key.CAPS_LOCK,
	'NumLock'          = Key.NUM_LOCK,
	'Pause'            = Key.PAUSE,
	'F1'               = Key.F1,
	'F2'               = Key.F2,
	'F3'               = Key.F3,
	'F4'               = Key.F4,
	'F5'               = Key.F5,
	'F6'               = Key.F6,
	'F7'               = Key.F7,
	'F8'               = Key.F8,
	'F9'               = Key.F9,
	'F10'              = Key.F10,
	'F11'              = Key.F11,
	'F12'              = Key.F12,
	'F13'              = Key.F13,
	'F14'              = Key.F14,
	'F15'              = Key.F15,
	'F16'              = Key.F16,
	'F17'              = Key.F17,
	'F18'              = Key.F18,
	'F19'              = Key.F19,
	'F20'              = Key.F20,
	'F21'              = Key.F21,
	'F22'              = Key.F22,
	'F23'              = Key.F23,
	'F24'              = Key.F24,
	'F25'              = Key.F25,

	// Numpad:
	'Numpad0'          = Key.NUMPAD_0,
	'Numpad1'          = Key.NUMPAD_1,
	'Numpad2'          = Key.NUMPAD_2,
	'Numpad3'          = Key.NUMPAD_3,
	'Numpad4'          = Key.NUMPAD_4,
	'Numpad5'          = Key.NUMPAD_5,
	'Numpad6'          = Key.NUMPAD_6,
	'Numpad7'          = Key.NUMPAD_7,
	'Numpad8'          = Key.NUMPAD_8,
	'Numpad9'          = Key.NUMPAD_9,
	'NumpadDecimal'    = Key.NUMPAD_DECIMAL,
	'NumpadDivide'     = Key.NUMPAD_DIVIDE,
	'NumpadMultiply'   = Key.NUMPAD_MULTIPLY,
	'NumpadSubtract'   = Key.NUMPAD_SUBTRACT,
	'NumpadAdd'        = Key.NUMPAD_ADD,
	'NumpadEnter'      = Key.NUMPAD_ENTER,
	'NumpadEqual'      = Key.NUMPAD_EQUAL,
	'NumpadComma'      = Key.NUMPAD_COMMA,

	'ShiftLeft'        = Key.LEFT_SHIFT,
	'ControlLeft'      = Key.LEFT_CONTROL,
	'AltLeft'          = Key.LEFT_ALT,
	'MetaLeft'         = Key.LEFT_SUPER,
	'OSLeft'           = Key.LEFT_SUPER,
	'ShiftRight'       = Key.RIGHT_SHIFT,
	'ControlRight'     = Key.RIGHT_CONTROL,
	'AltRight'         = Key.RIGHT_ALT,
	'MetaRight'        = Key.RIGHT_SUPER,
	'OSRight'          = Key.RIGHT_SUPER,
	'ContextMenu'      = Key.MENU,
}

export default Key;
