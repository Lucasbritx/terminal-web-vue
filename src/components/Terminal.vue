<template>
    <div ref="terminal" class="terminal-container"></div>
</template>

<script>
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

export default {
    mounted() {
        this.initTerminal();
    },
    methods: {
        initTerminal() {
            const terminal = new Terminal({
                cursorBlink: true,
                rows: 20,
                theme: {
                    background: "#1d1f21",
                    foreground: "#c5c8c6",
                },
            });

            const fitAddon = new FitAddon();
            terminal.loadAddon(fitAddon);
            terminal.open(this.$refs.terminal);
            fitAddon.fit();

            terminal.writeln("Bem-vindo ao Terminal! :)");
        },
    },
};
</script>

<style>
.terminal-container {
    width: 100%;
    height: 300px;
}
</style>