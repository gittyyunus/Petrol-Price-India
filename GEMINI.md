# Project Instructions

Gemini CLI is a command-line AI coding tool that can use the Astro Docs MCP server to access documentation while generating Astro code.

You can configure MCP servers at the global level in the `~/.gemini/settings.json` file, or in a `.gemini/settings.json` file in a project root.

## Configuration

`.gemini/settings.json`
```json
{
  "mcpServers": {
    "Astro docs": {
      "httpUrl": "https://mcp.docs.astro.build/mcp"
    }
  }
}
```
