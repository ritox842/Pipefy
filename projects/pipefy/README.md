# Pipefy

A comprehensive collection of Angular pipes for data transformation and formatting. Pipefy provides over 160 pipes to handle common data manipulation tasks in your Angular applications.

## Installation

```bash
npm install @stackblitz/pipefy
```

## Usage

All pipes are standalone, so you can import them individually:

```typescript
import { PfyCapitalizePipe } from '@stackblitz/pipefy';

@Component({
  // ...
  imports: [PfyCapitalizePipe]
})
```

## Available Pipes

### Text Pipes

| Pipe | Description | Example |
|------|-------------|---------|
| pfyCapitalize | Capitalizes the first letter | `'hello' | pfyCapitalize → 'Hello'` |
| pfyTruncate | Truncates text to specified length | `'Hello World' | pfyTruncate:5 → 'Hello...'` |
| pfySlugify | Converts text to URL-friendly slug | `'Hello World' | pfySlugify → 'hello-world'` |
| pfyReverse | Reverses text | `'hello' | pfyReverse → 'olleh'` |
| pfyMask | Masks characters | `'1234567890' | pfyMask:'*':4 → '******7890'` |
| pfyInitials | Gets initials from text | `'John Doe' | pfyInitials → 'JD'` |

### Array Pipes

| Pipe | Description | Example |
|------|-------------|---------|
| pfySort | Sorts array | `[3,1,2] | pfySort → [1,2,3]` |
| pfyFilter | Filters array | `[1,2,3] | pfyFilter:'>2' → [3]` |
| pfyUnique | Removes duplicates | `[1,1,2,2] | pfyUnique → [1,2]` |
| pfyGroupBy | Groups array by key | `users | pfyGroupBy:'country'` |
| pfyChunk | Splits array into chunks | `[1,2,3,4] | pfyChunk:2 → [[1,2],[3,4]]` |

### Number Pipes

| Pipe | Description | Example |
|------|-------------|---------|
| pfyOrdinal | Adds ordinal suffix | `42 | pfyOrdinal → '42nd'` |
| pfyFilesize | Formats bytes | `1024 | pfyFilesize → '1 KB'` |
| pfyPercentage | Formats as percentage | `0.42 | pfyPercentage → '42%'` |
| pfyRound | Rounds number | `3.14159 | pfyRound:2 → 3.14` |

### Date Pipes

| Pipe | Description | Example |
|------|-------------|---------|
| pfyTimeago | Time ago format | `date | pfyTimeago → '2 hours ago'` |
| pfyDuration | Formats duration | `3665 | pfyDuration → '1h 1m 5s'` |
| pfyCalendar | Calendar format | `date | pfyCalendar → 'Today'` |
| pfyAge | Calculates age | `birthDate | pfyAge → 25` |

### Object Pipes

| Pipe | Description | Example |
|------|-------------|---------|
| pfyKeys | Gets object keys | `obj | pfyKeys` |
| pfyValues | Gets object values | `obj | pfyValues` |
| pfyEntries | Gets object entries | `obj | pfyEntries` |
| pfyPick | Picks specified keys | `obj | pfyPick:['id','name']` |

### Color Pipes

| Pipe | Description | Example |
|------|-------------|---------|
| pfyRgb2hex | RGB to HEX | `[255,0,0] | pfyRgb2hex → '#ff0000'` |
| pfyHex2rgb | HEX to RGB | `'#ff0000' | pfyHex2rgb → {r:255,g:0,b:0}` |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © StackBlitz