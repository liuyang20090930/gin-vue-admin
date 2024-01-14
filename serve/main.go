package main

import (
	"demo/serve/core"
	"demo/serve/global"
)

func main() {
	global.GVA_VP = core.Viper()
}
