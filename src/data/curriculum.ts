export interface Resource {
  title: string;
  url: string;
  type: "video" | "article" | "docs" | "playground" | "github";
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample?: string;
  challenge?: string;
  challengeHint?: string;
  resources: Resource[];
  estimatedMinutes: number;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export const curriculum: Module[] = [
  {
    id: "getting-started",
    title: "Getting Started with Go",
    description:
      "Set up your environment and write your first Go program. Learn the basics of the Go toolchain.",
    icon: "🚀",
    lessons: [
      {
        id: "why-go",
        title: "Why Go?",
        description:
          "Understand what makes Go unique and why companies like Google, Uber, and Docker chose it.",
        content: `## Why Learn Go?

Go (or Golang) was created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It was designed to solve real-world software engineering problems at scale.

### Key Strengths

- **Simplicity**: Go has only 25 keywords. The language is intentionally small and easy to learn.
- **Performance**: Compiled to native machine code, Go programs run nearly as fast as C/C++.
- **Concurrency**: Built-in goroutines and channels make concurrent programming natural and efficient.
- **Fast Compilation**: Go compiles incredibly fast — large projects build in seconds.
- **Strong Standard Library**: Networking, HTTP, JSON, cryptography — all built in.
- **Static Typing with Inference**: Type safety without verbosity.

### Who Uses Go?

| Company | Use Case |
|---------|----------|
| Google | Core infrastructure, Kubernetes |
| Docker | Container runtime |
| Uber | High-throughput microservices |
| Twitch | Video delivery, chat |
| Cloudflare | Edge computing, DNS |
| Dropbox | Performance-critical backends |

### Go vs Other Languages

- **vs Python**: Go is ~40x faster, statically typed, compiles to a single binary
- **vs Java**: Simpler syntax, faster compilation, smaller memory footprint
- **vs Rust**: Easier learning curve, garbage collected, faster development cycle
- **vs Node.js**: Better CPU performance, true parallelism, no callback hell`,
        resources: [
          {
            title: "Go at Google: Language Design in the Service of Software Engineering",
            url: "https://go.dev/talks/2012/splash.article",
            type: "article",
          },
          {
            title: "The Go Programming Language - Official Site",
            url: "https://go.dev/",
            type: "docs",
          },
          {
            title: "Why Go? - Fireship (100 seconds)",
            url: "https://www.youtube.com/watch?v=446E-r0rXHI",
            type: "video",
          },
          {
            title: "Go in 100 Seconds - TechWorld with Nana",
            url: "https://www.youtube.com/watch?v=yyUHQIec83I",
            type: "video",
          },
        ],
        estimatedMinutes: 15,
      },
      {
        id: "install-setup",
        title: "Installation & Setup",
        description:
          "Install Go, set up your workspace, and configure your editor for Go development.",
        content: `## Installing Go

### macOS
\`\`\`bash
# Using Homebrew (recommended)
brew install go

# Or download from go.dev/dl
\`\`\`

### Linux
\`\`\`bash
# Download latest version
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz

# Extract to /usr/local
sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz

# Add to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH=$PATH:/usr/local/go/bin
\`\`\`

### Windows
Download the MSI installer from [go.dev/dl](https://go.dev/dl/) and run it.

### Verify Installation
\`\`\`bash
go version
# Output: go version go1.22.0 darwin/arm64
\`\`\`

## Editor Setup

### VS Code (Recommended)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Go extension** by the Go team
3. Open command palette → "Go: Install/Update Tools" → Select all → OK

### GoLand (JetBrains)
Full-featured Go IDE with built-in debugging, refactoring, and testing.

### Vim/Neovim
Use **vim-go** plugin or configure with **gopls** LSP.

## Go Workspace

Go uses a module-based system. Each project is a module:

\`\`\`bash
mkdir myproject && cd myproject
go mod init myproject
\`\`\`

This creates a \`go.mod\` file that tracks your dependencies.

## Important Go Commands

| Command | Description |
|---------|-------------|
| \`go run main.go\` | Compile and run |
| \`go build\` | Compile to binary |
| \`go test\` | Run tests |
| \`go fmt\` | Format code |
| \`go mod tidy\` | Clean up dependencies |
| \`go get\` | Add a dependency |`,
        codeExample: `// Verify your setup by running this
package main

import "fmt"

func main() {
    fmt.Println("Go is installed and ready!")
    fmt.Printf("Let's start learning! 🎉\\n")
}`,
        challenge:
          "Install Go on your machine, create a new module with `go mod init hello`, create a `main.go` file, and run it with `go run main.go`. Try modifying the print message and running again.",
        challengeHint:
          "Make sure `go version` works in your terminal before proceeding. If not, check that Go's bin directory is in your PATH.",
        resources: [
          {
            title: "Download and Install Go",
            url: "https://go.dev/doc/install",
            type: "docs",
          },
          {
            title: "VS Code Go Extension",
            url: "https://marketplace.visualstudio.com/items?itemName=golang.Go",
            type: "docs",
          },
          {
            title: "Go Setup & First Program - Tech With Tim",
            url: "https://www.youtube.com/watch?v=1MXIGYrMk80",
            type: "video",
          },
        ],
        estimatedMinutes: 30,
      },
      {
        id: "hello-world",
        title: "Hello, World!",
        description:
          "Write, understand, and run your very first Go program line by line.",
        content: `## Your First Go Program

Let's break down the classic Hello World:

\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`

### Line-by-Line Breakdown

**\`package main\`**
- Every Go file belongs to a package
- The \`main\` package is special — it defines an executable program
- Libraries use other package names (e.g., \`package utils\`)

**\`import "fmt"\`**
- Imports the \`fmt\` (format) package from the standard library
- \`fmt\` provides formatted I/O functions like \`Println\`, \`Printf\`, \`Sprintf\`
- Unused imports cause a **compilation error** in Go (keeps code clean!)

**\`func main()\`**
- The entry point of every Go executable
- No arguments, no return value
- Runs automatically when the program starts

**\`fmt.Println("Hello, World!")\`**
- Calls \`Println\` from the \`fmt\` package
- Prints the string followed by a newline
- Note: exported functions in Go start with an **uppercase letter**

### Key Go Principles Shown Here

1. **Explicit imports** — no implicit globals
2. **Capitalization matters** — \`fmt.Println\` (exported) vs \`fmt.println\` (would not compile)
3. **No semicolons** — Go automatically inserts them
4. **Enforced formatting** — \`go fmt\` standardizes code style
5. **No unused imports** — compiler enforces clean code`,
        codeExample: `package main

import "fmt"

func main() {
    // Basic printing
    fmt.Println("Hello, World!")

    // Formatted printing
    name := "Gopher"
    age := 15
    fmt.Printf("Hi, I'm %s and Go is %d years old!\\n", name, age)

    // Print without newline
    fmt.Print("This ")
    fmt.Print("is ")
    fmt.Print("on one line\\n")

    // Sprint returns a string instead of printing
    greeting := fmt.Sprintf("Welcome, %s!", name)
    fmt.Println(greeting)
}`,
        challenge:
          "Create a program that prints your name, your favorite programming language, and why you want to learn Go. Use both `Println` and `Printf` with format verbs (`%s`, `%d`).",
        challengeHint:
          'Use `%s` for strings, `%d` for integers, and `%f` for floats. Don\'t forget `\\n` at the end of `Printf` format strings.',
        resources: [
          {
            title: "A Tour of Go - Hello World",
            url: "https://go.dev/tour/welcome/1",
            type: "playground",
          },
          {
            title: "fmt Package Documentation",
            url: "https://pkg.go.dev/fmt",
            type: "docs",
          },
          {
            title: "Go Tutorial for Beginners - Hello World",
            url: "https://www.youtube.com/watch?v=YS4e4q9oBaU",
            type: "video",
          },
        ],
        estimatedMinutes: 20,
      },
    ],
  },
  {
    id: "fundamentals",
    title: "Go Fundamentals",
    description:
      "Master variables, types, control flow, and functions — the building blocks of every Go program.",
    icon: "🧱",
    lessons: [
      {
        id: "variables-types",
        title: "Variables & Types",
        description:
          "Learn how Go handles variables, constants, and its type system.",
        content: `## Variables in Go

Go is **statically typed** — every variable has a fixed type determined at compile time.

### Declaration Styles

\`\`\`go
// Explicit type declaration
var name string = "Alice"
var age int = 30

// Type inference (compiler figures out the type)
var city = "Tokyo"

// Short declaration (most common, only inside functions)
language := "Go"
count := 42
pi := 3.14159
\`\`\`

### Basic Types

| Type | Zero Value | Example |
|------|------------|---------|
| \`bool\` | \`false\` | \`true\`, \`false\` |
| \`string\` | \`""\` | \`"hello"\` |
| \`int\` | \`0\` | \`42\`, \`-7\` |
| \`int8/16/32/64\` | \`0\` | sized integers |
| \`uint\` | \`0\` | unsigned integer |
| \`float32/64\` | \`0.0\` | \`3.14\` |
| \`complex64/128\` | \`(0+0i)\` | \`3+4i\` |
| \`byte\` | \`0\` | alias for \`uint8\` |
| \`rune\` | \`0\` | alias for \`int32\` (Unicode) |

### Zero Values

In Go, variables declared without initialization get a **zero value**:
\`\`\`go
var i int      // 0
var f float64  // 0.0
var b bool     // false
var s string   // ""
\`\`\`

### Constants

\`\`\`go
const Pi = 3.14159
const (
    StatusOK    = 200
    StatusNotFound = 404
)

// iota — auto-incrementing constant generator
const (
    Sunday = iota  // 0
    Monday         // 1
    Tuesday        // 2
)
\`\`\`

### Type Conversions

Go requires **explicit** type conversions (no implicit casting):
\`\`\`go
i := 42
f := float64(i)     // int to float64
u := uint(f)        // float64 to uint
s := string(rune(65)) // int to string: "A"
\`\`\``,
        codeExample: `package main

import "fmt"

func main() {
    // Short declarations
    name := "Gopher"
    age := 15
    height := 1.75
    isAwesome := true

    fmt.Printf("Name: %s (type: %T)\\n", name, name)
    fmt.Printf("Age: %d (type: %T)\\n", age, age)
    fmt.Printf("Height: %.2f (type: %T)\\n", height, height)
    fmt.Printf("Awesome: %t (type: %T)\\n", isAwesome, isAwesome)

    // Multiple assignment
    x, y := 10, 20
    fmt.Printf("x=%d, y=%d\\n", x, y)

    // Swap without temp variable!
    x, y = y, x
    fmt.Printf("Swapped: x=%d, y=%d\\n", x, y)

    // Constants with iota
    const (
        Small  = iota // 0
        Medium        // 1
        Large         // 2
    )
    fmt.Printf("Sizes: %d, %d, %d\\n", Small, Medium, Large)

    // Type conversion
    intVal := 42
    floatVal := float64(intVal)
    fmt.Printf("%d as float64: %f\\n", intVal, floatVal)
}`,
        challenge:
          "Create a program that declares variables for a person (name, age, height, email, isStudent) using different declaration styles. Print each with its type using `%T`. Then create size constants using `iota`.",
        challengeHint:
          "Use `:=` for short declarations inside main(), `var` for explicit types. `%T` prints the type of a value.",
        resources: [
          {
            title: "A Tour of Go - Variables",
            url: "https://go.dev/tour/basics/8",
            type: "playground",
          },
          {
            title: "Go by Example: Variables",
            url: "https://gobyexample.com/variables",
            type: "article",
          },
          {
            title: "Go Variables & Types - Traversy Media",
            url: "https://www.youtube.com/watch?v=YS4e4q9oBaU&t=600",
            type: "video",
          },
        ],
        estimatedMinutes: 25,
      },
      {
        id: "control-flow",
        title: "Control Flow",
        description:
          "if/else, switch, and for loops — Go's streamlined control structures.",
        content: `## Control Flow in Go

Go keeps control flow simple: \`if\`, \`switch\`, and \`for\`. That's it — no while, no do-while, no ternary operator.

### If / Else

\`\`\`go
if x > 10 {
    fmt.Println("big")
} else if x > 5 {
    fmt.Println("medium")
} else {
    fmt.Println("small")
}
\`\`\`

**Go special: if with initialization statement**
\`\`\`go
if err := doSomething(); err != nil {
    fmt.Println("error:", err)
}
// err is NOT accessible here — scoped to the if block
\`\`\`

### For Loop (the ONLY loop in Go)

\`\`\`go
// Classic for
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

// While-style
n := 1
for n < 100 {
    n *= 2
}

// Infinite loop
for {
    // break to exit
}

// Range over collections
nums := []int{2, 4, 6, 8}
for index, value := range nums {
    fmt.Printf("[%d] = %d\\n", index, value)
}

// Ignore index with _
for _, v := range nums {
    fmt.Println(v)
}
\`\`\`

### Switch

\`\`\`go
// No break needed — Go switches don't fall through by default
switch day {
case "Monday":
    fmt.Println("Start of week")
case "Friday":
    fmt.Println("TGIF!")
case "Saturday", "Sunday":
    fmt.Println("Weekend!")
default:
    fmt.Println("Midweek")
}

// Switch with no condition (cleaner than if/else chains)
switch {
case score >= 90:
    grade = "A"
case score >= 80:
    grade = "B"
case score >= 70:
    grade = "C"
default:
    grade = "F"
}

// Type switch
switch v := x.(type) {
case int:
    fmt.Printf("int: %d\\n", v)
case string:
    fmt.Printf("string: %s\\n", v)
}
\`\`\``,
        codeExample: `package main

import "fmt"

func main() {
    // FizzBuzz — classic interview problem
    for i := 1; i <= 30; i++ {
        switch {
        case i%15 == 0:
            fmt.Println("FizzBuzz")
        case i%3 == 0:
            fmt.Println("Fizz")
        case i%5 == 0:
            fmt.Println("Buzz")
        default:
            fmt.Println(i)
        }
    }

    // If with init statement
    scores := map[string]int{"Alice": 92, "Bob": 78}
    if score, ok := scores["Alice"]; ok {
        fmt.Printf("Alice scored %d\\n", score)
    }

    // Labeled break for nested loops
outer:
    for i := 0; i < 5; i++ {
        for j := 0; j < 5; j++ {
            if i+j == 6 {
                fmt.Printf("Breaking at i=%d, j=%d\\n", i, j)
                break outer
            }
        }
    }
}`,
        challenge:
          "Write a FizzBuzz program (1-50) using a switch statement. Then write a program that finds all prime numbers up to 100 using nested for loops.",
        challengeHint:
          "For primes: a number n is prime if no number from 2 to sqrt(n) divides it evenly. Use `break` with a label to exit the inner loop.",
        resources: [
          {
            title: "A Tour of Go - Flow Control",
            url: "https://go.dev/tour/flowcontrol/1",
            type: "playground",
          },
          {
            title: "Go by Example: For",
            url: "https://gobyexample.com/for",
            type: "article",
          },
          {
            title: "Loops & Control Flow in Go",
            url: "https://www.youtube.com/watch?v=jZ-llP_yKNo",
            type: "video",
          },
        ],
        estimatedMinutes: 25,
      },
      {
        id: "functions",
        title: "Functions",
        description:
          "Define functions, handle multiple return values, and use closures.",
        content: `## Functions in Go

Functions are first-class citizens in Go. They can be assigned to variables, passed as arguments, and returned from other functions.

### Basic Syntax

\`\`\`go
func add(a int, b int) int {
    return a + b
}

// Same-type parameters can share the type
func add(a, b int) int {
    return a + b
}
\`\`\`

### Multiple Return Values

This is one of Go's most distinctive features:

\`\`\`go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}

result, err := divide(10, 3)
if err != nil {
    log.Fatal(err)
}
\`\`\`

### Named Return Values

\`\`\`go
func rectangleProps(length, width float64) (area, perimeter float64) {
    area = length * width
    perimeter = 2 * (length + width)
    return // "naked" return — returns named values
}
\`\`\`

### Variadic Functions

\`\`\`go
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

sum(1, 2, 3)       // 6
sum(1, 2, 3, 4, 5) // 15

// Spread a slice
numbers := []int{1, 2, 3}
sum(numbers...)     // 6
\`\`\`

### Functions as Values & Closures

\`\`\`go
// Function as a variable
multiply := func(a, b int) int {
    return a * b
}
fmt.Println(multiply(3, 4)) // 12

// Closure — captures outer variables
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}
c := counter()
fmt.Println(c()) // 1
fmt.Println(c()) // 2
fmt.Println(c()) // 3
\`\`\`

### Defer

Deferred calls execute when the surrounding function returns (LIFO order):
\`\`\`go
func readFile(path string) error {
    f, err := os.Open(path)
    if err != nil {
        return err
    }
    defer f.Close() // Guaranteed to run!
    // ... read file ...
}
\`\`\``,
        codeExample: `package main

import (
    "fmt"
    "strings"
)

// Multiple return values
func minMax(numbers []int) (int, int) {
    min, max := numbers[0], numbers[0]
    for _, n := range numbers[1:] {
        if n < min {
            min = n
        }
        if n > max {
            max = n
        }
    }
    return min, max
}

// Higher-order function
func apply(nums []int, fn func(int) int) []int {
    result := make([]int, len(nums))
    for i, n := range nums {
        result[i] = fn(n)
    }
    return result
}

// Closure: string transformer factory
func makeGreeter(greeting string) func(string) string {
    return func(name string) string {
        return fmt.Sprintf("%s, %s!", greeting, name)
    }
}

func main() {
    nums := []int{3, 1, 4, 1, 5, 9, 2, 6}
    min, max := minMax(nums)
    fmt.Printf("Min: %d, Max: %d\\n", min, max)

    doubled := apply(nums, func(n int) int { return n * 2 })
    fmt.Println("Doubled:", doubled)

    hello := makeGreeter("Hello")
    howdy := makeGreeter("Howdy")
    fmt.Println(hello("World"))
    fmt.Println(howdy("Gopher"))

    // Defer example
    fmt.Println("Counting down:")
    for i := 3; i >= 1; i-- {
        defer fmt.Printf("%d ", i)
    }
    fmt.Println()
    fmt.Println(strings.Repeat("-", 20))
}`,
        challenge:
          "Write a `map` function that takes a slice of strings and a transform function, returning a new slice. Use it to: (1) convert all strings to uppercase, (2) add a prefix to each string. Then write a `filter` function that keeps only strings matching a predicate.",
        challengeHint:
          "The signature would be: `func mapStrings(items []string, fn func(string) string) []string`. Use `strings.ToUpper` for uppercase conversion.",
        resources: [
          {
            title: "A Tour of Go - Functions",
            url: "https://go.dev/tour/moretypes/24",
            type: "playground",
          },
          {
            title: "Go by Example: Functions",
            url: "https://gobyexample.com/functions",
            type: "article",
          },
          {
            title: "Functions Deep Dive - Golang Dojo",
            url: "https://www.youtube.com/watch?v=feU9DY0gIKo",
            type: "video",
          },
        ],
        estimatedMinutes: 30,
      },
    ],
  },
  {
    id: "data-structures",
    title: "Data Structures",
    description:
      "Arrays, slices, maps, and structs — learn how Go organizes and stores data.",
    icon: "📦",
    lessons: [
      {
        id: "arrays-slices",
        title: "Arrays & Slices",
        description:
          "Understand the difference between fixed arrays and dynamic slices.",
        content: `## Arrays

Arrays in Go have a **fixed size** that's part of the type:

\`\`\`go
var a [5]int              // [0 0 0 0 0]
b := [3]string{"a", "b", "c"}
c := [...]int{1, 2, 3}   // Size inferred: [3]int
\`\`\`

Arrays are **values** in Go — assigning or passing copies the entire array.

## Slices

Slices are the workhorse of Go. They're dynamic, flexible views into arrays:

\`\`\`go
// Create a slice
s := []int{1, 2, 3, 4, 5}

// Slice from array
a := [5]int{10, 20, 30, 40, 50}
s := a[1:4]  // [20, 30, 40] — includes index 1, excludes 4

// make(type, length, capacity)
s := make([]int, 5)     // [0 0 0 0 0], cap=5
s := make([]int, 0, 10) // [], cap=10
\`\`\`

### Slice Internals

A slice is a **3-field struct**: pointer, length, capacity.

\`\`\`
┌─────┬─────┬──────────┐
│ ptr │ len │ capacity  │
└──┬──┴─────┴──────────┘
   │
   ▼
┌───┬───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ _ │ _ │ _ │  ← underlying array
└───┴───┴───┴───┴───┴───┘
\`\`\`

### Common Operations

\`\`\`go
// Append
s = append(s, 6)
s = append(s, 7, 8, 9)
s = append(s, otherSlice...)

// Length and capacity
len(s) // current length
cap(s) // current capacity

// Copy
dst := make([]int, len(src))
copy(dst, src)

// Delete element at index i
s = append(s[:i], s[i+1:]...)

// Slicing
s[2:]   // from index 2 to end
s[:3]   // from start to index 3
s[1:4]  // from index 1 to 3
\`\`\``,
        codeExample: `package main

import "fmt"

func main() {
    // Slice basics
    fruits := []string{"apple", "banana", "cherry", "date", "elderberry"}
    fmt.Println("Original:", fruits)
    fmt.Println("First 3:", fruits[:3])
    fmt.Println("Last 2:", fruits[3:])

    // Append grows the slice
    fruits = append(fruits, "fig", "grape")
    fmt.Println("After append:", fruits)
    fmt.Printf("Length: %d, Capacity: %d\\n", len(fruits), cap(fruits))

    // Removing an element (index 2 = "cherry")
    fruits = append(fruits[:2], fruits[3:]...)
    fmt.Println("After remove:", fruits)

    // 2D slice (slice of slices)
    matrix := [][]int{
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    }
    for _, row := range matrix {
        fmt.Println(row)
    }

    // Filter pattern
    numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    evens := []int{}
    for _, n := range numbers {
        if n%2 == 0 {
            evens = append(evens, n)
        }
    }
    fmt.Println("Evens:", evens)
}`,
        challenge:
          "Write a function `removeDuplicates` that takes a slice of integers and returns a new slice with duplicates removed, preserving order. Then write a `reverse` function that reverses a slice in place.",
        challengeHint:
          "For deduplication, use a `map[int]bool` to track seen values. For reverse, swap elements from both ends moving inward: `s[i], s[len(s)-1-i] = s[len(s)-1-i], s[i]`.",
        resources: [
          {
            title: "Go Slices: Usage and Internals",
            url: "https://go.dev/blog/slices-intro",
            type: "article",
          },
          {
            title: "Go by Example: Slices",
            url: "https://gobyexample.com/slices",
            type: "article",
          },
          {
            title: "Slices in Go - Junmin Lee",
            url: "https://www.youtube.com/watch?v=DXs-MqfLOO0",
            type: "video",
          },
        ],
        estimatedMinutes: 30,
      },
      {
        id: "maps",
        title: "Maps",
        description:
          "Go's built-in hash table for key-value storage.",
        content: `## Maps

Maps are Go's built-in hash table / dictionary type.

\`\`\`go
// Declaration and initialization
ages := map[string]int{
    "Alice": 30,
    "Bob":   25,
}

// Using make
scores := make(map[string]int)

// Operations
ages["Charlie"] = 35     // Set
age := ages["Alice"]      // Get (returns zero value if missing)
delete(ages, "Bob")       // Delete
len(ages)                 // Size

// Check if key exists
age, ok := ages["Dave"]
if !ok {
    fmt.Println("Dave not found")
}

// Idiomatic: comma-ok in if
if age, ok := ages["Alice"]; ok {
    fmt.Printf("Alice is %d\\n", age)
}
\`\`\`

### Important Details

- Maps are **reference types** — passing a map shares it
- Map iteration order is **randomized** (by design!)
- Maps are **not safe** for concurrent use (use \`sync.Map\` or a mutex)
- Zero value of a map is \`nil\` — you must initialize before writing
- Keys must be **comparable** (no slices, maps, or functions as keys)

### Common Patterns

\`\`\`go
// Word frequency counter
words := strings.Fields(text)
freq := make(map[string]int)
for _, w := range words {
    freq[w]++
}

// Set using map[T]struct{}
seen := make(map[string]struct{})
seen["apple"] = struct{}{}
if _, ok := seen["apple"]; ok {
    // exists in set
}

// Grouping
groups := make(map[string][]string)
groups["fruit"] = append(groups["fruit"], "apple")
\`\`\``,
        codeExample: `package main

import (
    "fmt"
    "strings"
)

func main() {
    // Word frequency counter
    text := "the quick brown fox jumps over the lazy dog the fox"
    words := strings.Fields(text)
    freq := make(map[string]int)
    for _, w := range words {
        freq[w]++
    }
    fmt.Println("Word frequencies:")
    for word, count := range freq {
        fmt.Printf("  %-10s %d\\n", word, count)
    }

    // Inverted index: group by first letter
    names := []string{"Alice", "Andy", "Bob", "Beth", "Charlie", "Carol"}
    byLetter := make(map[byte][]string)
    for _, name := range names {
        key := name[0]
        byLetter[key] = append(byLetter[key], name)
    }
    fmt.Println("\\nGrouped by first letter:")
    for letter, group := range byLetter {
        fmt.Printf("  %c: %v\\n", letter, group)
    }

    // Merge two maps
    defaults := map[string]string{"color": "blue", "size": "medium", "theme": "light"}
    overrides := map[string]string{"color": "red", "size": "large"}
    for k, v := range overrides {
        defaults[k] = v
    }
    fmt.Println("\\nMerged config:", defaults)
}`,
        challenge:
          "Write a program that: (1) counts character frequency in a string, (2) finds the most common character, and (3) groups a list of words by their length (map[int][]string).",
        challengeHint:
          "Range over a string gives you runes. Use `map[rune]int` for character counting. To find the max, iterate the map tracking the highest count.",
        resources: [
          {
            title: "Go by Example: Maps",
            url: "https://gobyexample.com/maps",
            type: "article",
          },
          {
            title: "Go Maps in Action",
            url: "https://go.dev/blog/maps",
            type: "article",
          },
          {
            title: "Maps in Go - Golang Dojo",
            url: "https://www.youtube.com/watch?v=yJE2RC37BF4",
            type: "video",
          },
        ],
        estimatedMinutes: 25,
      },
      {
        id: "structs",
        title: "Structs & Methods",
        description:
          "Define custom types, attach methods, and compose with embedding.",
        content: `## Structs

Structs are Go's way to define custom composite types:

\`\`\`go
type Person struct {
    Name string
    Age  int
    Email string
}

// Create instances
p1 := Person{Name: "Alice", Age: 30, Email: "alice@example.com"}
p2 := Person{"Bob", 25, "bob@example.com"} // positional (fragile)
p3 := &Person{Name: "Charlie"}             // pointer, other fields zero-valued

// Access fields
fmt.Println(p1.Name)
p1.Age = 31
\`\`\`

## Methods

Methods are functions with a **receiver** argument:

\`\`\`go
// Value receiver (gets a copy)
func (p Person) Greet() string {
    return fmt.Sprintf("Hi, I'm %s!", p.Name)
}

// Pointer receiver (can modify the struct)
func (p *Person) Birthday() {
    p.Age++
}
\`\`\`

**When to use pointer receivers:**
- When the method needs to **modify** the receiver
- When the struct is **large** (avoids copying)
- For **consistency** — if one method needs a pointer receiver, use it for all

## Struct Embedding (Composition)

Go doesn't have inheritance. It uses **composition** via embedding:

\`\`\`go
type Address struct {
    Street string
    City   string
    Country string
}

type Employee struct {
    Person           // Embedded — promotes all Person fields/methods
    Address          // Embedded
    Company  string
    Salary   float64
}

emp := Employee{
    Person:  Person{Name: "Alice", Age: 30},
    Address: Address{City: "Tokyo", Country: "Japan"},
    Company: "Gophers Inc",
    Salary:  95000,
}

// Promoted fields — access directly
fmt.Println(emp.Name)    // from Person
fmt.Println(emp.City)    // from Address
fmt.Println(emp.Greet()) // from Person's method
\`\`\`

## Constructor Pattern

Go doesn't have constructors, but uses a convention:

\`\`\`go
func NewPerson(name string, age int) *Person {
    return &Person{
        Name: name,
        Age:  age,
    }
}
\`\`\``,
        codeExample: `package main

import "fmt"

type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func (r Rectangle) String() string {
    return fmt.Sprintf("Rectangle(%.1f x %.1f)", r.Width, r.Height)
}

// Embedding example
type Canvas struct {
    Shapes []Rectangle
}

func (c *Canvas) Add(r Rectangle) {
    c.Shapes = append(c.Shapes, r)
}

func (c Canvas) TotalArea() float64 {
    total := 0.0
    for _, s := range c.Shapes {
        total += s.Area()
    }
    return total
}

func main() {
    r := Rectangle{Width: 10, Height: 5}
    fmt.Println(r)
    fmt.Printf("Area: %.1f\\n", r.Area())
    fmt.Printf("Perimeter: %.1f\\n", r.Perimeter())

    r.Scale(2)
    fmt.Printf("After 2x scale: %s, Area: %.1f\\n", r, r.Area())

    canvas := &Canvas{}
    canvas.Add(Rectangle{3, 4})
    canvas.Add(Rectangle{5, 6})
    canvas.Add(Rectangle{7, 8})
    fmt.Printf("Canvas total area: %.1f\\n", canvas.TotalArea())
}`,
        challenge:
          "Create a `BankAccount` struct with `Owner`, `Balance` fields. Add methods: `Deposit(amount)`, `Withdraw(amount) error`, `String() string`. Withdrawal should fail if insufficient funds. Create multiple accounts and simulate transactions.",
        challengeHint:
          "Use a pointer receiver for Deposit and Withdraw (they modify balance). Return an error from Withdraw: `fmt.Errorf(\"insufficient funds\")`. Implement `String()` to satisfy the `fmt.Stringer` interface.",
        resources: [
          {
            title: "A Tour of Go - Structs",
            url: "https://go.dev/tour/moretypes/2",
            type: "playground",
          },
          {
            title: "Go by Example: Structs",
            url: "https://gobyexample.com/structs",
            type: "article",
          },
          {
            title: "Structs & Methods in Go - NerdCademy",
            url: "https://www.youtube.com/watch?v=RUQADmZVeMI",
            type: "video",
          },
        ],
        estimatedMinutes: 35,
      },
    ],
  },
  {
    id: "interfaces-errors",
    title: "Interfaces & Error Handling",
    description:
      "Master Go's powerful interface system and idiomatic error handling patterns.",
    icon: "🔌",
    lessons: [
      {
        id: "interfaces",
        title: "Interfaces",
        description:
          "Learn Go's implicit interface system — the key to writing flexible, testable code.",
        content: `## Interfaces

Interfaces in Go are **implicit** — a type implements an interface just by having the right methods. No \`implements\` keyword needed.

\`\`\`go
type Shape interface {
    Area() float64
    Perimeter() float64
}

// Circle implicitly implements Shape
type Circle struct {
    Radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func (c Circle) Perimeter() float64 {
    return 2 * math.Pi * c.Radius
}
\`\`\`

### Key Interfaces in the Standard Library

| Interface | Methods | Used For |
|-----------|---------|----------|
| \`fmt.Stringer\` | \`String() string\` | Custom string representation |
| \`error\` | \`Error() string\` | Error values |
| \`io.Reader\` | \`Read([]byte) (int, error)\` | Reading data |
| \`io.Writer\` | \`Write([]byte) (int, error)\` | Writing data |
| \`sort.Interface\` | \`Len(), Less(), Swap()\` | Custom sorting |

### The Empty Interface

\`interface{}\` (or \`any\` in Go 1.18+) accepts **any** type:

\`\`\`go
func printAnything(v any) {
    fmt.Printf("Type: %T, Value: %v\\n", v, v)
}
\`\`\`

### Type Assertions & Type Switches

\`\`\`go
// Type assertion
s, ok := val.(string)
if ok {
    fmt.Println("It's a string:", s)
}

// Type switch
switch v := val.(type) {
case string:
    fmt.Println("string:", v)
case int:
    fmt.Println("int:", v)
default:
    fmt.Printf("unknown: %T\\n", v)
}
\`\`\`

### Interface Design Principles

> "The bigger the interface, the weaker the abstraction." — Rob Pike

- Keep interfaces **small** (1-3 methods)
- Define interfaces **where they're used**, not where implemented
- Accept **interfaces**, return **concrete types**`,
        codeExample: `package main

import (
    "fmt"
    "math"
)

// Small, focused interface
type Shape interface {
    Area() float64
}

type Circle struct{ Radius float64 }
type Rectangle struct{ Width, Height float64 }
type Triangle struct{ Base, Height float64 }

func (c Circle) Area() float64    { return math.Pi * c.Radius * c.Radius }
func (r Rectangle) Area() float64 { return r.Width * r.Height }
func (t Triangle) Area() float64  { return 0.5 * t.Base * t.Height }

// Stringer interface
func (c Circle) String() string    { return fmt.Sprintf("Circle(r=%.1f)", c.Radius) }
func (r Rectangle) String() string { return fmt.Sprintf("Rect(%.1f×%.1f)", r.Width, r.Height) }
func (t Triangle) String() string  { return fmt.Sprintf("Tri(b=%.1f,h=%.1f)", t.Base, t.Height) }

// Function accepting interface
func totalArea(shapes []Shape) float64 {
    total := 0.0
    for _, s := range shapes {
        total += s.Area()
    }
    return total
}

func describeShape(s Shape) {
    fmt.Printf("  %v → Area: %.2f\\n", s, s.Area())
}

func main() {
    shapes := []Shape{
        Circle{Radius: 5},
        Rectangle{Width: 10, Height: 3},
        Triangle{Base: 8, Height: 6},
        Circle{Radius: 2.5},
    }

    fmt.Println("Shapes:")
    for _, s := range shapes {
        describeShape(s)
    }
    fmt.Printf("\\nTotal area: %.2f\\n", totalArea(shapes))
}`,
        challenge:
          "Create a `Storer` interface with `Save(key string, value any) error` and `Get(key string) (any, error)`. Implement it with `MemoryStore` (uses a map) and `FileStore` (uses JSON files). Write a function that works with any `Storer`.",
        challengeHint:
          "For MemoryStore, use `map[string]any`. For FileStore, use `os.WriteFile` with `json.Marshal`. The function signature: `func backup(src, dst Storer, keys []string) error`.",
        resources: [
          {
            title: "A Tour of Go - Interfaces",
            url: "https://go.dev/tour/methods/9",
            type: "playground",
          },
          {
            title: "How to Use Interfaces in Go",
            url: "https://jordanorelli.com/post/32665860244/how-to-use-interfaces-in-go",
            type: "article",
          },
          {
            title: "Go Interfaces Explained - Matt Holiday",
            url: "https://www.youtube.com/watch?v=lh_Uv2imp14",
            type: "video",
          },
        ],
        estimatedMinutes: 35,
      },
      {
        id: "error-handling",
        title: "Error Handling",
        description:
          "Master Go's explicit error handling philosophy with errors, wrapping, and custom errors.",
        content: `## Error Handling in Go

Go handles errors **explicitly** — no exceptions, no try/catch. Errors are values.

\`\`\`go
result, err := doSomething()
if err != nil {
    return fmt.Errorf("doSomething failed: %w", err)
}
\`\`\`

### Creating Errors

\`\`\`go
import "errors"

// Simple errors
err := errors.New("something went wrong")
err := fmt.Errorf("user %d not found", userID)

// Sentinel errors (package-level)
var ErrNotFound = errors.New("not found")
var ErrUnauthorized = errors.New("unauthorized")
\`\`\`

### Custom Error Types

\`\`\`go
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation error: %s - %s", e.Field, e.Message)
}
\`\`\`

### Error Wrapping (Go 1.13+)

\`\`\`go
// Wrap with context
if err != nil {
    return fmt.Errorf("reading config: %w", err)
}

// Unwrap and check
if errors.Is(err, os.ErrNotExist) {
    // handle file not found
}

// Check for specific error type
var valErr *ValidationError
if errors.As(err, &valErr) {
    fmt.Printf("Field %s: %s\\n", valErr.Field, valErr.Message)
}
\`\`\`

### Best Practices

1. **Handle errors immediately** — don't defer error checking
2. **Add context when wrapping** — makes debugging easier
3. **Don't ignore errors** — at minimum, log them
4. **Use sentinel errors** for expected conditions (EOF, NotFound)
5. **Use custom error types** when callers need structured info
6. **panic/recover** is for truly unrecoverable situations only`,
        codeExample: `package main

import (
    "errors"
    "fmt"
)

// Sentinel errors
var (
    ErrInsufficientFunds = errors.New("insufficient funds")
    ErrAccountLocked     = errors.New("account is locked")
)

// Custom error type
type TransactionError struct {
    AccountID string
    Amount    float64
    Err       error
}

func (e *TransactionError) Error() string {
    return fmt.Sprintf("transaction failed for account %s (amount: $%.2f): %v",
        e.AccountID, e.Amount, e.Err)
}

func (e *TransactionError) Unwrap() error {
    return e.Err
}

// Business logic
func withdraw(accountID string, balance, amount float64) (float64, error) {
    if amount <= 0 {
        return balance, &TransactionError{
            AccountID: accountID,
            Amount:    amount,
            Err:       fmt.Errorf("invalid amount: must be positive"),
        }
    }
    if amount > balance {
        return balance, &TransactionError{
            AccountID: accountID,
            Amount:    amount,
            Err:       ErrInsufficientFunds,
        }
    }
    return balance - amount, nil
}

func main() {
    balance := 100.0

    // Successful withdrawal
    var err error
    balance, err = withdraw("ACC-001", balance, 30)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Printf("Withdrew $30. Balance: $%.2f\\n", balance)
    }

    // Failed withdrawal
    _, err = withdraw("ACC-001", balance, 200)
    if err != nil {
        fmt.Println("Error:", err)

        // Check for specific error
        var txErr *TransactionError
        if errors.As(err, &txErr) {
            fmt.Printf("  Account: %s\\n", txErr.AccountID)
        }
        if errors.Is(err, ErrInsufficientFunds) {
            fmt.Println("  → Suggest: top up your account")
        }
    }
}`,
        challenge:
          "Build a file-based config loader: `LoadConfig(path string) (Config, error)`. It should handle missing file, invalid JSON, and missing required fields — each with appropriate error types/wrapping. The caller should be able to distinguish between these cases using `errors.Is` and `errors.As`.",
        challengeHint:
          "Create custom error types like `ConfigError` with a `Kind` field (MissingFile, InvalidFormat, MissingField). Wrap os and json errors with `fmt.Errorf(\"...: %w\", err)`.",
        resources: [
          {
            title: "Error Handling and Go",
            url: "https://go.dev/blog/error-handling-and-go",
            type: "article",
          },
          {
            title: "Working with Errors in Go 1.13",
            url: "https://go.dev/blog/go1.13-errors",
            type: "article",
          },
          {
            title: "Go Error Handling - Boldly Go",
            url: "https://www.youtube.com/watch?v=hp6-0RtEMvA",
            type: "video",
          },
        ],
        estimatedMinutes: 30,
      },
    ],
  },
  {
    id: "concurrency",
    title: "Concurrency",
    description:
      "Goroutines, channels, and patterns — Go's killer feature for concurrent programming.",
    icon: "⚡",
    lessons: [
      {
        id: "goroutines",
        title: "Goroutines",
        description:
          "Lightweight concurrent functions that are the foundation of Go's concurrency model.",
        content: `## Goroutines

A goroutine is a **lightweight thread** managed by the Go runtime. They're incredibly cheap — you can run millions of them.

\`\`\`go
// Launch a goroutine with the 'go' keyword
go doSomething()

go func() {
    fmt.Println("I'm running concurrently!")
}()
\`\`\`

### Key Properties

- Start with just **2KB** of stack (grows as needed)
- Managed by Go's runtime scheduler, not the OS
- **M:N scheduling** — M goroutines on N OS threads
- Extremely cheap to create and destroy

### WaitGroups

\`\`\`go
var wg sync.WaitGroup

for i := 0; i < 5; i++ {
    wg.Add(1)
    go func(id int) {
        defer wg.Done()
        fmt.Printf("Worker %d done\\n", id)
    }(i)
}

wg.Wait() // Block until all goroutines finish
\`\`\`

### Common Gotchas

\`\`\`go
// BUG: Loop variable capture
for i := 0; i < 5; i++ {
    go func() {
        fmt.Println(i) // ❌ May print 5,5,5,5,5
    }()
}

// FIX: Pass as argument
for i := 0; i < 5; i++ {
    go func(n int) {
        fmt.Println(n) // ✅ Prints 0-4 (in random order)
    }(i)
}
\`\`\``,
        codeExample: `package main

import (
    "fmt"
    "math/rand"
    "sync"
    "time"
)

func fetchURL(url string, wg *sync.WaitGroup) {
    defer wg.Done()

    // Simulate network request
    delay := time.Duration(rand.Intn(3000)) * time.Millisecond
    time.Sleep(delay)
    fmt.Printf("✓ Fetched %s (took %v)\\n", url, delay)
}

func main() {
    urls := []string{
        "https://api.example.com/users",
        "https://api.example.com/posts",
        "https://api.example.com/comments",
        "https://api.example.com/albums",
        "https://api.example.com/todos",
    }

    start := time.Now()

    // Sequential
    fmt.Println("=== Sequential ===")
    for _, url := range urls {
        delay := time.Duration(rand.Intn(3000)) * time.Millisecond
        time.Sleep(delay)
        fmt.Printf("✓ Fetched %s (took %v)\\n", url, delay)
    }
    fmt.Printf("Sequential time: %v\\n\\n", time.Since(start))

    // Concurrent with goroutines
    fmt.Println("=== Concurrent ===")
    start = time.Now()
    var wg sync.WaitGroup
    for _, url := range urls {
        wg.Add(1)
        go fetchURL(url, &wg)
    }
    wg.Wait()
    fmt.Printf("Concurrent time: %v\\n", time.Since(start))
}`,
        challenge:
          "Write a program that concurrently computes the sum of squares for numbers 1-1,000,000 by splitting the work across 10 goroutines. Each goroutine handles a range, and results are collected via a shared slice protected by a sync.Mutex. Compare the result to a sequential calculation.",
        challengeHint:
          "Divide 1-1,000,000 into 10 chunks of 100,000. Each goroutine computes the sum of squares for its chunk. Use `sync.Mutex` to safely add to a shared total, or use a results slice where each goroutine writes to its own index.",
        resources: [
          {
            title: "A Tour of Go - Goroutines",
            url: "https://go.dev/tour/concurrency/1",
            type: "playground",
          },
          {
            title: "Go by Example: Goroutines",
            url: "https://gobyexample.com/goroutines",
            type: "article",
          },
          {
            title: "Concurrency in Go - Jake Wright",
            url: "https://www.youtube.com/watch?v=LvgVSSpwND8",
            type: "video",
          },
        ],
        estimatedMinutes: 30,
      },
      {
        id: "channels",
        title: "Channels",
        description:
          "Communicate safely between goroutines using Go's channel primitives.",
        content: `## Channels

Channels are Go's primary mechanism for goroutine communication. They provide both **synchronization** and **data transfer**.

> "Don't communicate by sharing memory; share memory by communicating." — Go Proverb

\`\`\`go
// Create channels
ch := make(chan int)       // Unbuffered
ch := make(chan string, 5) // Buffered (capacity 5)

// Send and receive
ch <- 42      // Send
value := <-ch // Receive

// Close a channel
close(ch)
\`\`\`

### Unbuffered vs Buffered

**Unbuffered**: Sender blocks until receiver is ready (synchronization point)
**Buffered**: Sender only blocks when buffer is full

### Channel Directions

\`\`\`go
func producer(out chan<- int) { ... } // Send-only
func consumer(in <-chan int)  { ... } // Receive-only
\`\`\`

### Range Over Channels

\`\`\`go
for value := range ch {
    // Loops until channel is closed
    fmt.Println(value)
}
\`\`\`

### Select Statement

Multiplex across multiple channels:

\`\`\`go
select {
case msg := <-ch1:
    fmt.Println("From ch1:", msg)
case msg := <-ch2:
    fmt.Println("From ch2:", msg)
case <-time.After(5 * time.Second):
    fmt.Println("Timeout!")
default:
    fmt.Println("No channels ready")
}
\`\`\`

### Common Patterns

- **Fan-out**: One producer, multiple consumers
- **Fan-in**: Multiple producers, one consumer
- **Pipeline**: Chain of stages connected by channels
- **Done channel**: Signal cancellation with \`close(done)\``,
        codeExample: `package main

import (
    "fmt"
    "time"
)

// Pipeline pattern: generate → square → print
func generate(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}

func square(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            out <- n * n
        }
        close(out)
    }()
    return out
}

// Fan-in: merge multiple channels into one
func merge(channels ...<-chan string) <-chan string {
    out := make(chan string)
    var count int
    for _, ch := range channels {
        count++
        go func(c <-chan string) {
            for v := range c {
                out <- v
            }
            count--
            if count == 0 {
                close(out)
            }
        }(ch)
    }
    return out
}

// Worker with timeout using select
func workerWithTimeout(jobs <-chan int, results chan<- int) {
    for {
        select {
        case job, ok := <-jobs:
            if !ok {
                return
            }
            time.Sleep(100 * time.Millisecond)
            results <- job * 2
        case <-time.After(2 * time.Second):
            fmt.Println("Worker timed out")
            return
        }
    }
}

func main() {
    // Pipeline
    fmt.Println("Pipeline: generate → square → print")
    for v := range square(generate(2, 3, 4, 5)) {
        fmt.Println(v)
    }

    // Worker pool with select
    fmt.Println("\\nWorker pool:")
    jobs := make(chan int, 10)
    results := make(chan int, 10)

    // Start 3 workers
    for w := 0; w < 3; w++ {
        go workerWithTimeout(jobs, results)
    }

    // Send 9 jobs
    for j := 1; j <= 9; j++ {
        jobs <- j
    }
    close(jobs)

    // Collect results
    for r := 0; r < 9; r++ {
        fmt.Printf("Result: %d\\n", <-results)
    }
}`,
        challenge:
          "Build a pipeline that: (1) generates numbers 1-100, (2) filters to only primes, (3) squares them, (4) sums the results. Each stage should be a goroutine connected by channels. Add a timeout that cancels the pipeline if it takes too long.",
        challengeHint:
          "Each stage is a function that takes `<-chan int` and returns `<-chan int`. Use `close(out)` after processing. For timeout, use `context.WithTimeout` or a `time.After` in a `select`.",
        resources: [
          {
            title: "A Tour of Go - Channels",
            url: "https://go.dev/tour/concurrency/2",
            type: "playground",
          },
          {
            title: "Go Concurrency Patterns (Rob Pike)",
            url: "https://www.youtube.com/watch?v=f6kdp27TYZs",
            type: "video",
          },
          {
            title: "Go Concurrency Patterns: Pipelines",
            url: "https://go.dev/blog/pipelines",
            type: "article",
          },
        ],
        estimatedMinutes: 40,
      },
    ],
  },
  {
    id: "packages-modules",
    title: "Packages & Modules",
    description:
      "Organize code with packages, manage dependencies with modules, and create reusable libraries.",
    icon: "📁",
    lessons: [
      {
        id: "packages",
        title: "Packages & Visibility",
        description:
          "Organize code into packages and understand Go's visibility rules.",
        content: `## Packages

Every Go file starts with a package declaration. Packages are Go's way of organizing and reusing code.

### Package Rules

- **One package per directory** (all files in a dir must have the same package)
- Package name = directory name (by convention)
- \`package main\` = executable program
- Any other package name = library

### Visibility (Exported vs Unexported)

Go uses **capitalization** instead of public/private keywords:

\`\`\`go
package user

type User struct {       // Exported — visible outside package
    Name  string         // Exported field
    email string         // unexported — only visible within package
}

func NewUser() *User { } // Exported function
func validate() bool { } // unexported function
\`\`\`

### Project Structure

\`\`\`
myproject/
├── go.mod
├── main.go
├── internal/          ← Can only be imported by parent module
│   └── database/
│       └── db.go
├── pkg/               ← Intended for external use
│   └── api/
│       └── handler.go
└── cmd/               ← Multiple executables
    ├── server/
    │   └── main.go
    └── cli/
        └── main.go
\`\`\`

### Importing

\`\`\`go
import (
    "fmt"                          // Standard library
    "myproject/internal/database"  // Local package
    "github.com/gin-gonic/gin"    // Third-party

    // Aliases
    mydb "myproject/internal/database"
    . "fmt"  // Dot import (avoid — pollutes namespace)
    _ "image/png" // Blank import (side effects only)
)
\`\`\`

### init() Functions

Each package can have \`init()\` functions that run automatically at program start:

\`\`\`go
func init() {
    // Runs before main()
    // Used for setup, registration, validation
}
\`\`\``,
        codeExample: `// This example shows how packages are structured.
// In a real project, these would be in separate files.

// === models/user.go ===
package models

import "fmt"

type User struct {
    ID    int
    Name  string
    Email string
    age   int // unexported — package private
}

func NewUser(name, email string) *User {
    return &User{Name: name, Email: email}
}

func (u *User) String() string {
    return fmt.Sprintf("User(%s <%s>)", u.Name, u.Email)
}

// === main.go ===
package main

import (
    "fmt"
    "myproject/models"
)

func main() {
    u := models.NewUser("Alice", "alice@example.com")
    fmt.Println(u)           // Uses String() method
    fmt.Println(u.Name)      // ✅ Exported field
    // fmt.Println(u.age)    // ❌ Won't compile — unexported
}`,
        challenge:
          "Create a multi-package project: (1) a `calculator` package with exported functions (Add, Subtract, Multiply, Divide) and an unexported helper, (2) a `history` package that tracks past calculations, (3) a `main` package that uses both. Use proper Go project layout.",
        challengeHint:
          "Create directories: `calculator/`, `history/`, and `main.go` at root. Each dir gets its own `.go` file with matching package name. Import using your module path from `go.mod`.",
        resources: [
          {
            title: "How to Write Go Code",
            url: "https://go.dev/doc/code",
            type: "docs",
          },
          {
            title: "Go Project Layout",
            url: "https://github.com/golang-standards/project-layout",
            type: "github",
          },
          {
            title: "Packages in Go - Golang Dojo",
            url: "https://www.youtube.com/watch?v=sf7f4QGkwfE",
            type: "video",
          },
        ],
        estimatedMinutes: 30,
      },
      {
        id: "modules",
        title: "Go Modules & Dependencies",
        description:
          "Manage project dependencies with Go modules.",
        content: `## Go Modules

Go modules are the official dependency management system (since Go 1.11).

### Creating a Module

\`\`\`bash
mkdir myproject && cd myproject
go mod init github.com/username/myproject
\`\`\`

Creates \`go.mod\`:
\`\`\`
module github.com/username/myproject

go 1.22

require (
    github.com/gin-gonic/gin v1.9.1
)
\`\`\`

### Managing Dependencies

\`\`\`bash
# Add a dependency
go get github.com/gin-gonic/gin

# Add specific version
go get github.com/gin-gonic/gin@v1.9.1

# Update to latest
go get -u github.com/gin-gonic/gin

# Remove unused dependencies
go mod tidy

# Vendor dependencies (copy to project)
go mod vendor

# List all dependencies
go list -m all
\`\`\`

### go.sum

\`go.sum\` contains cryptographic checksums of dependencies for security. Always commit both \`go.mod\` and \`go.sum\`.

### Private Modules

\`\`\`bash
# Set GOPRIVATE for private repos
go env -w GOPRIVATE=github.com/myorg/*
\`\`\`

### Useful Commands

| Command | Description |
|---------|-------------|
| \`go mod init\` | Initialize new module |
| \`go mod tidy\` | Add missing, remove unused deps |
| \`go mod vendor\` | Copy deps into vendor/ |
| \`go mod graph\` | Print dependency graph |
| \`go mod why\` | Explain why a dep is needed |
| \`go mod download\` | Download deps to cache |`,
        codeExample: `// Example go.mod file
module github.com/username/gowebapp

go 1.22

require (
    github.com/gin-gonic/gin v1.9.1
    github.com/jackc/pgx/v5 v5.5.0
    go.uber.org/zap v1.26.0
)

// Practical example: using third-party packages
package main

import (
    "log"
    "net/http"

    "github.com/gin-gonic/gin"
)

type Todo struct {
    ID    string \`json:"id"\`
    Title string \`json:"title"\`
    Done  bool   \`json:"done"\`
}

var todos = []Todo{
    {ID: "1", Title: "Learn Go modules", Done: true},
    {ID: "2", Title: "Build an API", Done: false},
}

func main() {
    r := gin.Default()

    r.GET("/todos", func(c *gin.Context) {
        c.JSON(http.StatusOK, todos)
    })

    r.POST("/todos", func(c *gin.Context) {
        var todo Todo
        if err := c.BindJSON(&todo); err != nil {
            c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
            return
        }
        todos = append(todos, todo)
        c.JSON(http.StatusCreated, todo)
    })

    log.Fatal(r.Run(":8080"))
}`,
        challenge:
          "Create a new Go module, add the `cobra` CLI library (`github.com/spf13/cobra`) as a dependency, and build a simple CLI tool with `hello` and `version` commands. Use `go mod tidy` to clean up.",
        challengeHint:
          "Run `go get github.com/spf13/cobra@latest`. Create a root command with `cobra.Command{}`, add subcommands with `rootCmd.AddCommand(helloCmd)`. Check the cobra documentation for examples.",
        resources: [
          {
            title: "Using Go Modules",
            url: "https://go.dev/blog/using-go-modules",
            type: "article",
          },
          {
            title: "Go Modules Reference",
            url: "https://go.dev/ref/mod",
            type: "docs",
          },
          {
            title: "Go Modules Explained - Golang Dojo",
            url: "https://www.youtube.com/watch?v=7xSxIwWJ9R4",
            type: "video",
          },
        ],
        estimatedMinutes: 25,
      },
    ],
  },
  {
    id: "testing",
    title: "Testing in Go",
    description:
      "Write effective tests, benchmarks, and learn test-driven development with Go's built-in testing framework.",
    icon: "🧪",
    lessons: [
      {
        id: "unit-testing",
        title: "Unit Testing",
        description:
          "Write and run tests using Go's built-in testing package.",
        content: `## Testing in Go

Go has testing built into the language and toolchain. No external framework needed!

### Test File Convention

- Test files end with \`_test.go\`
- Test functions start with \`Test\`
- Same package as the code being tested

\`\`\`
math/
├── math.go       ← Production code
└── math_test.go  ← Tests
\`\`\`

### Basic Test

\`\`\`go
// math.go
package math

func Add(a, b int) int {
    return a + b
}

// math_test.go
package math

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Add(2, 3) = %d; want 5", result)
    }
}
\`\`\`

### Table-Driven Tests

The **idiomatic** way to test in Go:

\`\`\`go
func TestAdd(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"positive", 2, 3, 5},
        {"negative", -1, -2, -3},
        {"zero", 0, 0, 0},
        {"mixed", -1, 5, 4},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := Add(tt.a, tt.b)
            if result != tt.expected {
                t.Errorf("Add(%d, %d) = %d; want %d",
                    tt.a, tt.b, result, tt.expected)
            }
        })
    }
}
\`\`\`

### Running Tests

\`\`\`bash
go test              # Current package
go test ./...        # All packages
go test -v           # Verbose output
go test -run TestAdd # Run specific tests
go test -count=1     # Disable test caching
go test -race        # Race condition detector
go test -cover       # Coverage report
\`\`\`

### Test Helpers

\`\`\`go
func TestSomething(t *testing.T) {
    t.Helper()  // Marks as helper (better error line numbers)
    t.Skip("not implemented yet")
    t.Parallel() // Run in parallel
    t.Cleanup(func() { /* runs after test */ })
}
\`\`\``,
        codeExample: `package main

import (
    "strings"
    "testing"
)

// Function to test
func Slugify(s string) string {
    s = strings.ToLower(s)
    s = strings.TrimSpace(s)
    s = strings.ReplaceAll(s, " ", "-")
    return s
}

// Table-driven test
func TestSlugify(t *testing.T) {
    tests := []struct {
        name  string
        input string
        want  string
    }{
        {"simple", "Hello World", "hello-world"},
        {"already lowercase", "hello world", "hello-world"},
        {"extra spaces", "  Hello  World  ", "hello--world"},
        {"single word", "Go", "go"},
        {"empty string", "", ""},
        {"special chars", "Hello, World!", "hello,-world!"},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := Slugify(tt.input)
            if got != tt.want {
                t.Errorf("Slugify(%q) = %q, want %q", tt.input, got, tt.want)
            }
        })
    }
}

// Benchmark
func BenchmarkSlugify(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Slugify("Hello Beautiful World")
    }
}`,
        challenge:
          "Write a `Stack` (LIFO) data structure with Push, Pop, Peek, IsEmpty, and Size methods. Then write comprehensive table-driven tests covering: normal operations, edge cases (pop from empty stack), and a sequence of mixed operations.",
        challengeHint:
          "Use a slice as the backing store. For tests, include cases like: push 3 items then pop all, peek doesn't remove, pop from empty returns error. Use `t.Run` for subtests.",
        resources: [
          {
            title: "Go Testing Documentation",
            url: "https://pkg.go.dev/testing",
            type: "docs",
          },
          {
            title: "Go by Example: Testing",
            url: "https://gobyexample.com/testing",
            type: "article",
          },
          {
            title: "Unit Testing in Go - Golang Dojo",
            url: "https://www.youtube.com/watch?v=FjkSJ1iXKpg",
            type: "video",
          },
        ],
        estimatedMinutes: 35,
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build web servers and REST APIs using Go's standard library and popular frameworks.",
    icon: "🌐",
    lessons: [
      {
        id: "http-basics",
        title: "HTTP Servers",
        description:
          "Build web servers using Go's powerful net/http standard library.",
        content: `## HTTP in Go

Go's \`net/http\` package is production-ready out of the box. Many companies use it directly without frameworks.

### Basic Server

\`\`\`go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!")
    })

    http.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json")
        w.Write([]byte(\`{"status": "ok"}\`))
    })

    fmt.Println("Server running on :8080")
    http.ListenAndServe(":8080", nil)
}
\`\`\`

### Request Handling

\`\`\`go
func handler(w http.ResponseWriter, r *http.Request) {
    // Method
    r.Method // "GET", "POST", etc.

    // URL and path
    r.URL.Path      // "/api/users/123"
    r.URL.Query()   // URL query parameters

    // Headers
    r.Header.Get("Content-Type")

    // Body
    body, _ := io.ReadAll(r.Body)
    defer r.Body.Close()

    // Response
    w.WriteHeader(http.StatusCreated)  // 201
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(data)
}
\`\`\`

### Middleware Pattern

\`\`\`go
func logging(next http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        log.Printf("%s %s", r.Method, r.URL.Path)
        next(w, r)
    }
}

http.HandleFunc("/api/data", logging(dataHandler))
\`\`\`

### Go 1.22+ Enhanced Routing

\`\`\`go
mux := http.NewServeMux()
mux.HandleFunc("GET /api/users", listUsers)
mux.HandleFunc("POST /api/users", createUser)
mux.HandleFunc("GET /api/users/{id}", getUser)
mux.HandleFunc("DELETE /api/users/{id}", deleteUser)
\`\`\``,
        codeExample: `package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "sync"
    "time"
)

type Todo struct {
    ID        int       \`json:"id"\`
    Title     string    \`json:"title"\`
    Completed bool      \`json:"completed"\`
    CreatedAt time.Time \`json:"created_at"\`
}

var (
    todos  = make(map[int]Todo)
    nextID = 1
    mu     sync.Mutex
)

func main() {
    mux := http.NewServeMux()

    // Routes (Go 1.22+)
    mux.HandleFunc("GET /api/todos", listTodos)
    mux.HandleFunc("POST /api/todos", createTodo)
    mux.HandleFunc("GET /api/todos/{id}", getTodo)

    // Middleware wrapper
    handler := loggingMiddleware(mux)

    fmt.Println("Server running on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", handler))
}

func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
    })
}

func listTodos(w http.ResponseWriter, r *http.Request) {
    mu.Lock()
    defer mu.Unlock()

    list := make([]Todo, 0, len(todos))
    for _, t := range todos {
        list = append(list, t)
    }
    writeJSON(w, http.StatusOK, list)
}

func createTodo(w http.ResponseWriter, r *http.Request) {
    var input struct {
        Title string \`json:"title"\`
    }
    if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
        writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid JSON"})
        return
    }

    mu.Lock()
    defer mu.Unlock()

    todo := Todo{
        ID:        nextID,
        Title:     input.Title,
        Completed: false,
        CreatedAt: time.Now(),
    }
    nextID++
    todos[todo.ID] = todo
    writeJSON(w, http.StatusCreated, todo)
}

func getTodo(w http.ResponseWriter, r *http.Request) {
    mu.Lock()
    defer mu.Unlock()

    // Go 1.22+ path value
    id := r.PathValue("id")
    for _, t := range todos {
        if fmt.Sprintf("%d", t.ID) == id {
            writeJSON(w, http.StatusOK, t)
            return
        }
    }
    writeJSON(w, http.StatusNotFound, map[string]string{"error": "not found"})
}

func writeJSON(w http.ResponseWriter, status int, data any) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(status)
    json.NewEncoder(w).Encode(data)
}`,
        challenge:
          "Build a complete REST API for a bookmark manager: CRUD operations for bookmarks (URL, title, tags), search by tag, and a health check endpoint. Use proper HTTP methods and status codes. Add a logging middleware that records request duration.",
        challengeHint:
          "Use Go 1.22+ routing: `mux.HandleFunc(\"GET /api/bookmarks\", ...)`. Store bookmarks in a `map[int]Bookmark` protected by `sync.Mutex`. For tag search, use query params: `/api/bookmarks?tag=go`.",
        resources: [
          {
            title: "Go net/http Package",
            url: "https://pkg.go.dev/net/http",
            type: "docs",
          },
          {
            title: "Making a RESTful JSON API in Go",
            url: "https://thenewstack.io/make-a-restful-json-api-go/",
            type: "article",
          },
          {
            title: "Build a REST API in Go - Akhil Sharma",
            url: "https://www.youtube.com/watch?v=lNd7XlXwlho",
            type: "video",
          },
          {
            title: "Go Web Examples",
            url: "https://gowebexamples.com/",
            type: "article",
          },
        ],
        estimatedMinutes: 45,
      },
    ],
  },
  {
    id: "projects",
    title: "Capstone Projects",
    description:
      "Put it all together with real-world projects that use everything you've learned.",
    icon: "🏆",
    lessons: [
      {
        id: "cli-tool",
        title: "Build a CLI Task Manager",
        description:
          "Build a complete command-line task manager with file persistence.",
        content: `## Project: CLI Task Manager

Build a feature-rich task manager that runs in the terminal.

### Requirements

1. **Add** tasks with title and optional priority (low/medium/high)
2. **List** tasks — filter by status (pending/done) and priority
3. **Complete** tasks by ID
4. **Delete** tasks
5. **Persist** tasks to a JSON file
6. **Search** tasks by keyword

### Skills Used

- Structs and methods
- Slices and maps
- File I/O (JSON)
- Error handling
- Packages (organize into cmd/, internal/)
- \`flag\` or \`os.Args\` for CLI parsing

### Architecture

\`\`\`
task-cli/
├── go.mod
├── main.go              ← CLI entry point
├── internal/
│   ├── task/
│   │   ├── task.go      ← Task struct & methods
│   │   └── task_test.go
│   └── store/
│       ├── store.go     ← JSON file persistence
│       └── store_test.go
\`\`\`

### Example Usage

\`\`\`bash
$ task add "Learn Go concurrency" --priority high
✓ Added task #1: Learn Go concurrency [HIGH]

$ task add "Buy groceries" --priority low
✓ Added task #2: Buy groceries [LOW]

$ task list
ID  Status   Priority  Title
1   pending  HIGH      Learn Go concurrency
2   pending  LOW       Buy groceries

$ task complete 1
✓ Completed task #1

$ task list --status done
ID  Status     Priority  Title
1   completed  HIGH      Learn Go concurrency
\`\`\`

### Bonus Features

- Due dates with overdue highlighting
- Categories/tags
- Export to CSV
- Interactive mode with arrow key navigation`,
        codeExample: `// Here's a starter structure to build upon:
package main

import (
    "encoding/json"
    "fmt"
    "os"
    "strconv"
    "time"
)

type Priority int

const (
    Low Priority = iota
    Medium
    High
)

func (p Priority) String() string {
    return [...]string{"LOW", "MEDIUM", "HIGH"}[p]
}

type Task struct {
    ID          int       \`json:"id"\`
    Title       string    \`json:"title"\`
    Priority    Priority  \`json:"priority"\`
    Completed   bool      \`json:"completed"\`
    CreatedAt   time.Time \`json:"created_at"\`
    CompletedAt *time.Time \`json:"completed_at,omitempty"\`
}

type Store struct {
    Tasks  []Task \`json:"tasks"\`
    NextID int    \`json:"next_id"\`
    path   string
}

func NewStore(path string) (*Store, error) {
    s := &Store{path: path, NextID: 1}
    data, err := os.ReadFile(path)
    if err != nil {
        if os.IsNotExist(err) {
            return s, nil
        }
        return nil, err
    }
    return s, json.Unmarshal(data, s)
}

func (s *Store) Save() error {
    data, err := json.MarshalIndent(s, "", "  ")
    if err != nil {
        return err
    }
    return os.WriteFile(s.path, data, 0644)
}

func (s *Store) Add(title string, priority Priority) Task {
    task := Task{
        ID:        s.NextID,
        Title:     title,
        Priority:  priority,
        CreatedAt: time.Now(),
    }
    s.NextID++
    s.Tasks = append(s.Tasks, task)
    return task
}

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Usage: task <add|list|complete|delete> [args]")
        os.Exit(1)
    }

    store, err := NewStore("tasks.json")
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error loading tasks: %v\\n", err)
        os.Exit(1)
    }

    switch os.Args[1] {
    case "add":
        if len(os.Args) < 3 {
            fmt.Println("Usage: task add <title>")
            os.Exit(1)
        }
        task := store.Add(os.Args[2], Medium)
        store.Save()
        fmt.Printf("Added task #%d: %s\\n", task.ID, task.Title)

    case "list":
        for _, t := range store.Tasks {
            status := "[ ]"
            if t.Completed {
                status = "[✓]"
            }
            fmt.Printf("%s #%d [%s] %s\\n", status, t.ID, t.Priority, t.Title)
        }

    case "complete":
        if len(os.Args) < 3 {
            fmt.Println("Usage: task complete <id>")
            os.Exit(1)
        }
        id, _ := strconv.Atoi(os.Args[2])
        for i := range store.Tasks {
            if store.Tasks[i].ID == id {
                store.Tasks[i].Completed = true
                now := time.Now()
                store.Tasks[i].CompletedAt = &now
                store.Save()
                fmt.Printf("Completed task #%d\\n", id)
                return
            }
        }
        fmt.Printf("Task #%d not found\\n", id)
    }
}`,
        challenge:
          "Extend this starter code into a full CLI tool with all the features listed above. Add proper error handling, the `delete` and `search` subcommands, priority filtering in `list`, and write tests for the Store methods.",
        challengeHint:
          "Use `strings.Contains(strings.ToLower(task.Title), query)` for search. For filtering, add `--status` and `--priority` flags using the `flag` package with subcommands.",
        resources: [
          {
            title: "Cobra CLI Library",
            url: "https://github.com/spf13/cobra",
            type: "github",
          },
          {
            title: "Build Go CLI Tools - Golang Dojo",
            url: "https://www.youtube.com/watch?v=SSRIn5DAmyw",
            type: "video",
          },
          {
            title: "Go CLI Best Practices",
            url: "https://clig.dev/",
            type: "article",
          },
        ],
        estimatedMinutes: 120,
      },
      {
        id: "web-api",
        title: "Build a URL Shortener",
        description:
          "Build a complete URL shortener web service with Go.",
        content: `## Project: URL Shortener

Build a production-style URL shortener service.

### Requirements

1. **POST /api/shorten** — Accept a long URL, return a short code
2. **GET /{code}** — Redirect to the original URL
3. **GET /api/stats/{code}** — Return click stats
4. **Persist** data (start with in-memory, then add file/DB)
5. **Validate** URLs before shortening
6. **Rate limiting** to prevent abuse

### Skills Used

- HTTP server (net/http)
- JSON encoding/decoding
- Maps and concurrency safety (sync.RWMutex)
- URL validation
- Middleware (logging, rate limiting)
- Testing HTTP handlers

### Architecture

\`\`\`
shortener/
├── go.mod
├── main.go
├── internal/
│   ├── handler/   ← HTTP handlers
│   ├── store/     ← Data storage
│   ├── shortener/ ← URL shortening logic
│   └── middleware/ ← Logging, rate limiting
\`\`\`

### API Design

\`\`\`json
// POST /api/shorten
// Request:
{ "url": "https://example.com/very/long/path" }

// Response:
{
  "short_url": "http://localhost:8080/abc123",
  "code": "abc123",
  "original_url": "https://example.com/very/long/path",
  "created_at": "2024-01-15T10:30:00Z"
}

// GET /api/stats/abc123
{
  "code": "abc123",
  "original_url": "https://example.com/very/long/path",
  "clicks": 42,
  "created_at": "2024-01-15T10:30:00Z",
  "last_clicked": "2024-01-16T14:22:00Z"
}
\`\`\``,
        codeExample: `package main

import (
    "crypto/rand"
    "encoding/hex"
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "net/url"
    "strings"
    "sync"
    "time"
)

type URLEntry struct {
    Code        string     \`json:"code"\`
    OriginalURL string     \`json:"original_url"\`
    ShortURL    string     \`json:"short_url"\`
    Clicks      int        \`json:"clicks"\`
    CreatedAt   time.Time  \`json:"created_at"\`
    LastClicked *time.Time \`json:"last_clicked,omitempty"\`
}

type Store struct {
    mu      sync.RWMutex
    urls    map[string]*URLEntry
    baseURL string
}

func NewStore(baseURL string) *Store {
    return &Store{urls: make(map[string]*URLEntry), baseURL: baseURL}
}

func generateCode() string {
    bytes := make([]byte, 4)
    rand.Read(bytes)
    return hex.EncodeToString(bytes)[:6]
}

func (s *Store) Shorten(originalURL string) (*URLEntry, error) {
    if _, err := url.ParseRequestURI(originalURL); err != nil {
        return nil, fmt.Errorf("invalid URL: %w", err)
    }

    code := generateCode()
    entry := &URLEntry{
        Code:        code,
        OriginalURL: originalURL,
        ShortURL:    s.baseURL + "/" + code,
        CreatedAt:   time.Now(),
    }

    s.mu.Lock()
    s.urls[code] = entry
    s.mu.Unlock()

    return entry, nil
}

func main() {
    store := NewStore("http://localhost:8080")
    mux := http.NewServeMux()

    mux.HandleFunc("POST /api/shorten", func(w http.ResponseWriter, r *http.Request) {
        var input struct{ URL string \`json:"url"\` }
        json.NewDecoder(r.Body).Decode(&input)

        entry, err := store.Shorten(input.URL)
        if err != nil {
            http.Error(w, err.Error(), http.StatusBadRequest)
            return
        }

        w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusCreated)
        json.NewEncoder(w).Encode(entry)
    })

    mux.HandleFunc("GET /{code}", func(w http.ResponseWriter, r *http.Request) {
        code := r.PathValue("code")
        if strings.Contains(code, "/") || code == "api" {
            http.NotFound(w, r)
            return
        }

        store.mu.Lock()
        entry, ok := store.urls[code]
        if ok {
            entry.Clicks++
            now := time.Now()
            entry.LastClicked = &now
        }
        store.mu.Unlock()

        if !ok {
            http.NotFound(w, r)
            return
        }
        http.Redirect(w, r, entry.OriginalURL, http.StatusMovedPermanently)
    })

    fmt.Println("URL Shortener running on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", mux))
}`,
        challenge:
          "Extend this URL shortener with: (1) stats endpoint, (2) custom short codes, (3) URL validation, (4) expiration (URLs expire after N days), (5) rate limiting middleware, (6) JSON file persistence. Write HTTP handler tests using `httptest`.",
        challengeHint:
          "Use `httptest.NewRecorder()` and `httptest.NewRequest()` for testing. For rate limiting, use a `map[string][]time.Time` tracking request timestamps per IP. For persistence, save to JSON on every write and load on startup.",
        resources: [
          {
            title: "Go net/http Handlers",
            url: "https://pkg.go.dev/net/http",
            type: "docs",
          },
          {
            title: "Testing HTTP Handlers in Go",
            url: "https://blog.questionable.services/article/testing-http-handlers-go/",
            type: "article",
          },
          {
            title: "Build a URL Shortener in Go",
            url: "https://www.youtube.com/watch?v=H3qMOEN1m7w",
            type: "video",
          },
        ],
        estimatedMinutes: 180,
      },
    ],
  },
];
