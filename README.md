# Chrome Trace Events Typescript Defs

Future work:

* Gather many different Chrome traces with a variety of categories / flags that could affect trace events.
* Group similar trace events (V8) into a namespace.
* Consider grouping the same trace events, but of different phases, into a namespace: `namespace FirstContentfulPaint { interace b{...}; interface e{...}; interface R{...};}`
* Add some sample TSC code that uses the generated types.
* Publish to npm.
