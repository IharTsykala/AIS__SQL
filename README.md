## How to use

In the app folder write the command `node tool [options]`, where the `options` are:
* `-s, --shift`: cipher shift (number)
* `-a, --action`: action - encode/decode 
* `-i, --input`: input file (default: `input.txt`)
* `-o, --output`: output file (default: `output.txt`)

### Usage examples:

```bash
node index --action decode --shift 3

```

```bash
node index -a encode --shift 3
```

```bash
node index --action encode --shift 3 --input ./input.txt --output ./output.txt
```

```bash
node index -a decode -s 3 -i "./input.txt" -o "./output.txt"
```
