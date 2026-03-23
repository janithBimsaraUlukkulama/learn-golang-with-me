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
  {
    id: "design-patterns",
    title: "Design Patterns in Go",
    description:
      "Master idiomatic Go design patterns — from classic Gang of Four patterns adapted for Go to Go-specific patterns like functional options and concurrency pipelines.",
    icon: "🏗️",
    lessons: [
      {
        id: "patterns-intro",
        title: "Design Patterns & Go Philosophy",
        description:
          "Understand how Go's simplicity and composition-over-inheritance philosophy shapes the way design patterns are applied.",
        content: `## Design Patterns in Go

Design patterns are proven solutions to recurring software design problems. In Go, patterns look different from what you'd see in Java or C++ because Go favors:

- **Composition over inheritance** — no class hierarchies
- **Implicit interfaces** — no \`implements\` keyword
- **First-class functions** — functions as values, closures
- **Concurrency primitives** — goroutines and channels built into the language

### Why Patterns Matter

Patterns give you a shared vocabulary. When someone says "use a factory here" or "this is a pipeline pattern," everyone on the team immediately understands the structure.

### How Go Changes the Game

Many traditional OOP patterns become simpler in Go:

| Traditional OOP | Go Approach |
|-----------------|-------------|
| Abstract Factory with class hierarchies | Function that returns an interface |
| Strategy pattern with strategy interface + concrete classes | Pass a function value |
| Observer with subscriber lists | Use channels |
| Decorator with wrapper classes | Middleware (function wrapping) |
| Singleton with private constructor | Package-level \`var\` + \`sync.Once\` |

### Pattern Categories We'll Cover

1. **Creational** — How objects are created (Factory, Builder, Singleton)
2. **Structural** — How objects are composed (Adapter, Decorator)
3. **Behavioral** — How objects communicate (Strategy, Observer)
4. **Go-Specific** — Patterns unique to Go (Functional Options, Pipeline, Fan-out/Fan-in)

### The Golden Rule

> Don't force a pattern where it doesn't fit. Go code should be simple and readable first. Apply patterns when they genuinely reduce complexity.

\`\`\`go
// Go's interfaces make polymorphism natural
type Writer interface {
    Write(p []byte) (n int, err error)
}

// Anything that has a Write method satisfies Writer.
// No "implements" keyword needed.
// This is the foundation of most Go patterns.
\`\`\``,
        resources: [
          {
            title: "Go Proverbs — Rob Pike",
            url: "https://go-proverbs.github.io/",
            type: "article",
          },
          {
            title: "Design Patterns in Go (refactoring.guru)",
            url: "https://refactoring.guru/design-patterns/go",
            type: "article",
          },
          {
            title: "Effective Go",
            url: "https://go.dev/doc/effective_go",
            type: "docs",
          },
        ],
        estimatedMinutes: 15,
      },
      {
        id: "creational-patterns",
        title: "Creational Patterns",
        description:
          "Learn Factory, Builder, and Singleton patterns the Go way — using functions, method chaining, and sync.Once.",
        content: `## Creational Patterns

Creational patterns control how objects are created. In Go, these are simpler than their OOP counterparts because Go doesn't have constructors or class hierarchies.

---

### Factory Pattern

A factory is a function that returns an interface. The caller doesn't need to know the concrete type.

\`\`\`go
package notification

// The interface consumers depend on
type Notifier interface {
    Send(to, message string) error
}

// Concrete implementations (unexported)
type emailNotifier struct{ smtpHost string }
type smsNotifier struct{ apiKey string }

func (e *emailNotifier) Send(to, msg string) error {
    fmt.Printf("Email to %s via %s: %s\\n", to, e.smtpHost, msg)
    return nil
}

func (s *smsNotifier) Send(to, msg string) error {
    fmt.Printf("SMS to %s: %s\\n", to, msg)
    return nil
}

// Factory function — returns the interface, hides the concrete type
func NewNotifier(channel string, config map[string]string) (Notifier, error) {
    switch channel {
    case "email":
        return &emailNotifier{smtpHost: config["smtp_host"]}, nil
    case "sms":
        return &smsNotifier{apiKey: config["api_key"]}, nil
    default:
        return nil, fmt.Errorf("unknown channel: %s", channel)
    }
}
\`\`\`

**When to use:** When you need to create objects of different types based on configuration or input, and consumers should depend on an interface rather than a concrete type.

---

### Builder Pattern

Builders construct complex objects step by step using method chaining.

\`\`\`go
package main

import (
    "fmt"
    "strings"
)

type HTTPRequest struct {
    Method  string
    URL     string
    Headers map[string]string
    Body    string
    Timeout int
}

type RequestBuilder struct {
    request HTTPRequest
}

func NewRequestBuilder(method, url string) *RequestBuilder {
    return &RequestBuilder{
        request: HTTPRequest{
            Method:  method,
            URL:     url,
            Headers: make(map[string]string),
        },
    }
}

func (b *RequestBuilder) Header(key, value string) *RequestBuilder {
    b.request.Headers[key] = value
    return b
}

func (b *RequestBuilder) Body(body string) *RequestBuilder {
    b.request.Body = body
    return b
}

func (b *RequestBuilder) Timeout(seconds int) *RequestBuilder {
    b.request.Timeout = seconds
    return b
}

func (b *RequestBuilder) Build() HTTPRequest {
    return b.request
}

func main() {
    req := NewRequestBuilder("POST", "https://api.example.com/users").
        Header("Content-Type", "application/json").
        Header("Authorization", "Bearer token123").
        Body(\`{"name": "Alice"}\`).
        Timeout(30).
        Build()

    fmt.Printf("%+v\\n", req)
}
\`\`\`

**When to use:** When an object has many optional fields and you want a clean, readable construction API.

---

### Singleton Pattern

Go uses package-level variables and \`sync.Once\` for singletons — no private constructors needed.

\`\`\`go
package db

import (
    "database/sql"
    "sync"
)

var (
    instance *sql.DB
    once     sync.Once
)

// GetDB returns the singleton database connection.
// The connection is created lazily on first call.
func GetDB() *sql.DB {
    once.Do(func() {
        var err error
        instance, err = sql.Open("postgres", "postgres://localhost/mydb")
        if err != nil {
            panic("failed to connect to database: " + err.Error())
        }
        instance.SetMaxOpenConns(25)
    })
    return instance
}
\`\`\`

**When to use:** For shared resources like database connections, loggers, or configuration that should be initialized once.

> **Warning:** Singletons make testing harder because they introduce global state. Prefer dependency injection where possible — pass the dependency as a parameter instead.`,
        challenge:
          "Build a vehicle factory: Create a `Vehicle` interface with `Describe() string`. Implement `Car`, `Truck`, and `Motorcycle` types. Write a `NewVehicle(vehicleType string) (Vehicle, error)` factory function. Then create a `VehicleBuilder` that lets you chain `.Color()`, `.Engine()`, `.Seats()` before calling `.Build()`.",
        challengeHint:
          "Start with the interface, then implement each vehicle type as an unexported struct. The factory function switches on the vehicleType string. For the builder, store fields in the builder struct and construct the vehicle in Build().",
        resources: [
          {
            title: "Factory Pattern in Go",
            url: "https://refactoring.guru/design-patterns/factory-method/go/example",
            type: "article",
          },
          {
            title: "Builder Pattern in Go",
            url: "https://refactoring.guru/design-patterns/builder/go/example",
            type: "article",
          },
          {
            title: "sync.Once Documentation",
            url: "https://pkg.go.dev/sync#Once",
            type: "docs",
          },
        ],
        estimatedMinutes: 40,
      },
      {
        id: "structural-patterns",
        title: "Structural Patterns",
        description:
          "Learn Adapter, Decorator, and Composite patterns — using Go interfaces and embedding for clean composition.",
        content: `## Structural Patterns

Structural patterns deal with how types are composed to form larger structures. Go's implicit interfaces and struct embedding make these patterns elegant.

---

### Adapter Pattern

An adapter wraps one interface to satisfy another. This is extremely common in Go — you adapt third-party libraries to fit your application's interfaces.

\`\`\`go
package main

import "fmt"

// Your application's interface
type Logger interface {
    Log(level, message string)
}

// Third-party logger with a different API
type ZapLogger struct{}

func (z *ZapLogger) Info(msg string, fields ...string) {
    fmt.Printf("[ZAP INFO] %s %v\\n", msg, fields)
}

func (z *ZapLogger) Error(msg string, fields ...string) {
    fmt.Printf("[ZAP ERROR] %s %v\\n", msg, fields)
}

// Adapter — wraps ZapLogger to satisfy our Logger interface
type ZapAdapter struct {
    zap *ZapLogger
}

func (a *ZapAdapter) Log(level, message string) {
    switch level {
    case "error":
        a.zap.Error(message)
    default:
        a.zap.Info(message)
    }
}

func NewLogger() Logger {
    return &ZapAdapter{zap: &ZapLogger{}}
}

func main() {
    logger := NewLogger()
    logger.Log("info", "server started")
    logger.Log("error", "connection failed")
}
\`\`\`

**When to use:** When you need to integrate a library whose API doesn't match your interfaces, or when wrapping external dependencies so they can be swapped out later.

---

### Decorator Pattern (Middleware)

In Go, the decorator pattern is most commonly seen as **middleware** — functions that wrap other functions to add behavior.

\`\`\`go
package main

import (
    "fmt"
    "log"
    "net/http"
    "time"
)

// Middleware type: takes a handler, returns a handler
type Middleware func(http.Handler) http.Handler

// Logging middleware
func WithLogging(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        start := time.Now()
        next.ServeHTTP(w, r)
        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))
    })
}

// Authentication middleware
func WithAuth(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        token := r.Header.Get("Authorization")
        if token == "" {
            http.Error(w, "unauthorized", http.StatusUnauthorized)
            return
        }
        next.ServeHTTP(w, r)
    })
}

// Recovery middleware — catches panics
func WithRecovery(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        defer func() {
            if err := recover(); err != nil {
                log.Printf("panic recovered: %v", err)
                http.Error(w, "internal error", 500)
            }
        }()
        next.ServeHTTP(w, r)
    })
}

// Chain applies middleware in order (outermost first)
func Chain(h http.Handler, middlewares ...Middleware) http.Handler {
    for i := len(middlewares) - 1; i >= 0; i-- {
        h = middlewares[i](h)
    }
    return h
}

func main() {
    hello := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "Hello, World!")
    })

    // Stack middleware: Recovery → Logging → Auth → Handler
    handler := Chain(hello, WithRecovery, WithLogging, WithAuth)

    http.ListenAndServe(":8080", handler)
}
\`\`\`

**When to use:** To add cross-cutting concerns (logging, auth, rate limiting, tracing) without modifying the core handler.

---

### Composite Pattern

Composite lets you treat individual objects and compositions uniformly through a shared interface.

\`\`\`go
package main

import "fmt"

type FileSystemEntry interface {
    Name() string
    Size() int64
    Print(indent string)
}

// Leaf
type File struct {
    name string
    size int64
}

func (f *File) Name() string        { return f.name }
func (f *File) Size() int64         { return f.size }
func (f *File) Print(indent string) { fmt.Printf("%s📄 %s (%d bytes)\\n", indent, f.name, f.size) }

// Composite
type Directory struct {
    name     string
    children []FileSystemEntry
}

func (d *Directory) Name() string { return d.name }
func (d *Directory) Size() int64 {
    var total int64
    for _, child := range d.children {
        total += child.Size()
    }
    return total
}
func (d *Directory) Print(indent string) {
    fmt.Printf("%s📁 %s/ (%d bytes)\\n", indent, d.name, d.Size())
    for _, child := range d.children {
        child.Print(indent + "  ")
    }
}
func (d *Directory) Add(entry FileSystemEntry) { d.children = append(d.children, entry) }

func main() {
    root := &Directory{name: "project"}
    src := &Directory{name: "src"}
    src.Add(&File{name: "main.go", size: 1200})
    src.Add(&File{name: "handler.go", size: 800})
    root.Add(src)
    root.Add(&File{name: "go.mod", size: 150})

    root.Print("")
}
\`\`\`

**When to use:** When you have tree-like structures where leaves and branches should be treated uniformly (file systems, UI components, org charts).`,
        challenge:
          "Build a middleware stack for an HTTP server: Create `WithRateLimit(requestsPerMinute int)` middleware that tracks requests per IP using a map. Create `WithCORS(allowedOrigins []string)` middleware. Chain them together with logging and serve a simple JSON API endpoint.",
        challengeHint:
          "For rate limiting, use a `map[string][]time.Time` to track request timestamps per IP. Clean up old entries on each request. For CORS, set `Access-Control-Allow-Origin` and `Access-Control-Allow-Methods` headers. Use the Chain function from the lesson to compose them.",
        resources: [
          {
            title: "Adapter Pattern in Go",
            url: "https://refactoring.guru/design-patterns/adapter/go/example",
            type: "article",
          },
          {
            title: "Writing HTTP Middleware in Go",
            url: "https://go.dev/blog/middleware",
            type: "article",
          },
          {
            title: "Decorator Pattern in Go",
            url: "https://refactoring.guru/design-patterns/decorator/go/example",
            type: "article",
          },
        ],
        estimatedMinutes: 45,
      },
      {
        id: "behavioral-patterns",
        title: "Behavioral Patterns",
        description:
          "Master Strategy, Observer, and Command patterns — leveraging Go's first-class functions and channels.",
        content: `## Behavioral Patterns

Behavioral patterns define how objects interact and communicate. Go's first-class functions and channels make many of these patterns concise and idiomatic.

---

### Strategy Pattern

In classic OOP, Strategy requires an interface with multiple concrete implementations. In Go, you can often just use a function type.

\`\`\`go
package main

import (
    "fmt"
    "sort"
    "strings"
)

// Strategy as a function type
type SortStrategy func([]string) []string

// Concrete strategies
func AlphabeticalSort(items []string) []string {
    sorted := make([]string, len(items))
    copy(sorted, items)
    sort.Strings(sorted)
    return sorted
}

func ByLengthSort(items []string) []string {
    sorted := make([]string, len(items))
    copy(sorted, items)
    sort.Slice(sorted, func(i, j int) bool {
        return len(sorted[i]) < len(sorted[j])
    })
    return sorted
}

func ReverseAlphabeticalSort(items []string) []string {
    sorted := AlphabeticalSort(items)
    for i, j := 0, len(sorted)-1; i < j; i, j = i+1, j-1 {
        sorted[i], sorted[j] = sorted[j], sorted[i]
    }
    return sorted
}

// Context that uses the strategy
type ItemList struct {
    items    []string
    strategy SortStrategy
}

func (l *ItemList) SetStrategy(s SortStrategy) {
    l.strategy = s
}

func (l *ItemList) Display() {
    sorted := l.strategy(l.items)
    fmt.Println(strings.Join(sorted, ", "))
}

func main() {
    list := &ItemList{
        items:    []string{"banana", "apple", "kiwi", "cherry", "date"},
        strategy: AlphabeticalSort,
    }

    fmt.Print("Alphabetical: ")
    list.Display()

    list.SetStrategy(ByLengthSort)
    fmt.Print("By length:    ")
    list.Display()

    list.SetStrategy(ReverseAlphabeticalSort)
    fmt.Print("Reverse:      ")
    list.Display()
}
\`\`\`

**Key insight:** In Go, if your strategy is a single method, just use a \`func\` type. No need for an interface with one method.

---

### Observer Pattern

The Observer pattern lets objects subscribe to events. In Go, channels provide a natural mechanism for this.

\`\`\`go
package main

import (
    "fmt"
    "sync"
)

type Event struct {
    Type    string
    Payload interface{}
}

type EventBus struct {
    mu          sync.RWMutex
    subscribers map[string][]chan Event
}

func NewEventBus() *EventBus {
    return &EventBus{
        subscribers: make(map[string][]chan Event),
    }
}

func (eb *EventBus) Subscribe(eventType string) <-chan Event {
    ch := make(chan Event, 10) // buffered to prevent blocking
    eb.mu.Lock()
    eb.subscribers[eventType] = append(eb.subscribers[eventType], ch)
    eb.mu.Unlock()
    return ch
}

func (eb *EventBus) Publish(event Event) {
    eb.mu.RLock()
    defer eb.mu.RUnlock()
    for _, ch := range eb.subscribers[event.Type] {
        // Non-blocking send
        select {
        case ch <- event:
        default:
            fmt.Printf("subscriber channel full, dropping event: %s\\n", event.Type)
        }
    }
}

func (eb *EventBus) Close() {
    eb.mu.Lock()
    defer eb.mu.Unlock()
    for _, subs := range eb.subscribers {
        for _, ch := range subs {
            close(ch)
        }
    }
}

func main() {
    bus := NewEventBus()

    // Subscriber 1: listens for user events
    userEvents := bus.Subscribe("user.created")
    go func() {
        for event := range userEvents {
            fmt.Printf("📧 Send welcome email to: %v\\n", event.Payload)
        }
    }()

    // Subscriber 2: also listens for user events
    auditEvents := bus.Subscribe("user.created")
    go func() {
        for event := range auditEvents {
            fmt.Printf("📝 Audit log: new user %v\\n", event.Payload)
        }
    }()

    // Subscriber 3: listens for order events
    orderEvents := bus.Subscribe("order.placed")
    go func() {
        for event := range orderEvents {
            fmt.Printf("📦 Process order: %v\\n", event.Payload)
        }
    }()

    // Publish events
    bus.Publish(Event{Type: "user.created", Payload: "alice@example.com"})
    bus.Publish(Event{Type: "user.created", Payload: "bob@example.com"})
    bus.Publish(Event{Type: "order.placed", Payload: "order-123"})

    // Give goroutines time to process (in production, use sync.WaitGroup)
    fmt.Scanln()
}
\`\`\`

**When to use:** Event-driven architectures, pub/sub systems, decoupling components that need to react to state changes.

---

### Command Pattern

The Command pattern encapsulates operations as objects, enabling undo/redo, queuing, and logging.

\`\`\`go
package main

import "fmt"

// Command interface
type Command interface {
    Execute()
    Undo()
    Description() string
}

// Receiver
type TextEditor struct {
    content string
}

func (e *TextEditor) String() string { return e.content }

// Concrete commands
type InsertCommand struct {
    editor *TextEditor
    text   string
    pos    int
}

func (c *InsertCommand) Execute() {
    c.editor.content = c.editor.content[:c.pos] + c.text + c.editor.content[c.pos:]
}

func (c *InsertCommand) Undo() {
    c.editor.content = c.editor.content[:c.pos] + c.editor.content[c.pos+len(c.text):]
}

func (c *InsertCommand) Description() string {
    return fmt.Sprintf("Insert '%s' at position %d", c.text, c.pos)
}

// Command history for undo/redo
type History struct {
    commands []Command
    current  int
}

func NewHistory() *History {
    return &History{current: -1}
}

func (h *History) Execute(cmd Command) {
    // Discard any undone commands
    h.commands = h.commands[:h.current+1]
    cmd.Execute()
    h.commands = append(h.commands, cmd)
    h.current++
    fmt.Printf("  ✅ %s\\n", cmd.Description())
}

func (h *History) Undo() {
    if h.current < 0 {
        fmt.Println("  Nothing to undo")
        return
    }
    cmd := h.commands[h.current]
    cmd.Undo()
    h.current--
    fmt.Printf("  ↩️  Undo: %s\\n", cmd.Description())
}

func (h *History) Redo() {
    if h.current+1 >= len(h.commands) {
        fmt.Println("  Nothing to redo")
        return
    }
    h.current++
    cmd := h.commands[h.current]
    cmd.Execute()
    fmt.Printf("  ↪️  Redo: %s\\n", cmd.Description())
}

func main() {
    editor := &TextEditor{}
    history := NewHistory()

    history.Execute(&InsertCommand{editor: editor, text: "Hello", pos: 0})
    fmt.Printf("  Content: %q\\n\\n", editor)

    history.Execute(&InsertCommand{editor: editor, text: ", World", pos: 5})
    fmt.Printf("  Content: %q\\n\\n", editor)

    history.Execute(&InsertCommand{editor: editor, text: "!", pos: 12})
    fmt.Printf("  Content: %q\\n\\n", editor)

    history.Undo()
    fmt.Printf("  Content: %q\\n\\n", editor)

    history.Undo()
    fmt.Printf("  Content: %q\\n\\n", editor)

    history.Redo()
    fmt.Printf("  Content: %q\\n\\n", editor)
}
\`\`\`

**When to use:** Undo/redo functionality, task queues, macro recording, transaction-based systems.`,
        challenge:
          "Build a simple task scheduler using the Command pattern: Create `PrintCommand`, `SleepCommand`, and `HTTPCommand` (simulated). Implement a `Scheduler` that queues commands and executes them in order. Add retry logic — if a command fails, retry up to 3 times before moving on.",
        challengeHint:
          "Add an `error` return to Execute(). The Scheduler loops through its queue, calling Execute() and retrying on error. Use a simple counter per command to track attempts.",
        resources: [
          {
            title: "Strategy Pattern in Go",
            url: "https://refactoring.guru/design-patterns/strategy/go/example",
            type: "article",
          },
          {
            title: "Observer Pattern in Go",
            url: "https://refactoring.guru/design-patterns/observer/go/example",
            type: "article",
          },
          {
            title: "Go Channels Tutorial",
            url: "https://go.dev/tour/concurrency/2",
            type: "docs",
          },
        ],
        estimatedMinutes: 50,
      },
      {
        id: "functional-options",
        title: "Functional Options Pattern",
        description:
          "Learn the idiomatic Go pattern for configurable constructors — popularized by Dave Cheney and Rob Pike.",
        content: `## Functional Options Pattern

The Functional Options pattern is one of the most distinctly "Go" patterns. It solves the problem of constructors with many optional parameters in an elegant, extensible way.

### The Problem

How do you create a server with many optional settings?

\`\`\`go
// Approach 1: Many parameters — confusing, what does each bool mean?
NewServer("localhost", 8080, true, false, 30, nil, true)

// Approach 2: Config struct — better, but zero values may be valid
NewServer(Config{Host: "localhost", Port: 8080, Timeout: 30})
// Is Timeout=0 "not set" or "no timeout"?

// Approach 3: Functional Options — clean, self-documenting, extensible ✅
NewServer("localhost", 8080,
    WithTimeout(30 * time.Second),
    WithTLS(certFile, keyFile),
    WithMaxConnections(100),
)
\`\`\`

### The Pattern

\`\`\`go
package server

import (
    "crypto/tls"
    "log"
    "time"
)

type Server struct {
    host           string
    port           int
    timeout        time.Duration
    maxConnections int
    tlsConfig      *tls.Config
    logger         *log.Logger
}

// Option is a function that configures a Server
type Option func(*Server)

// Option functions — each returns an Option
func WithTimeout(d time.Duration) Option {
    return func(s *Server) {
        s.timeout = d
    }
}

func WithMaxConnections(n int) Option {
    return func(s *Server) {
        s.maxConnections = n
    }
}

func WithTLS(certFile, keyFile string) Option {
    return func(s *Server) {
        cert, err := tls.LoadX509KeyPair(certFile, keyFile)
        if err != nil {
            log.Fatalf("failed to load TLS cert: %v", err)
        }
        s.tlsConfig = &tls.Config{Certificates: []tls.Certificate{cert}}
    }
}

func WithLogger(l *log.Logger) Option {
    return func(s *Server) {
        s.logger = l
    }
}

// NewServer creates a server with sensible defaults and applies options
func NewServer(host string, port int, opts ...Option) *Server {
    // Start with defaults
    s := &Server{
        host:           host,
        port:           port,
        timeout:        30 * time.Second,
        maxConnections: 100,
        logger:         log.Default(),
    }

    // Apply each option
    for _, opt := range opts {
        opt(s)
    }

    return s
}
\`\`\`

### Usage

\`\`\`go
func main() {
    // Simple — just defaults
    s1 := server.NewServer("localhost", 8080)

    // Customized
    s2 := server.NewServer("0.0.0.0", 443,
        server.WithTimeout(60 * time.Second),
        server.WithMaxConnections(1000),
        server.WithTLS("cert.pem", "key.pem"),
    )

    // Preset configurations
    devDefaults := []server.Option{
        server.WithTimeout(5 * time.Second),
        server.WithMaxConnections(10),
    }
    s3 := server.NewServer("localhost", 3000, devDefaults...)
}
\`\`\`

### Why This Pattern Wins

| Benefit | Explanation |
|---------|-------------|
| **Self-documenting** | \`WithTimeout(30s)\` is clearer than a positional \`30\` |
| **Backwards-compatible** | Adding new options doesn't break existing callers |
| **Composable** | Options can be grouped into presets |
| **Defaults are explicit** | Set in the constructor, overridden by options |
| **Validation** | Each option function can validate its input |

### Advanced: Options with Validation

\`\`\`go
// Option that can fail
type OptionErr func(*Server) error

func WithPort(port int) OptionErr {
    return func(s *Server) error {
        if port < 1 || port > 65535 {
            return fmt.Errorf("invalid port: %d", port)
        }
        s.port = port
        return nil
    }
}

func NewServerSafe(host string, opts ...OptionErr) (*Server, error) {
    s := &Server{host: host, port: 8080}
    for _, opt := range opts {
        if err := opt(s); err != nil {
            return nil, err
        }
    }
    return s, nil
}
\`\`\`

### Real-World Usage

This pattern is used extensively in the Go ecosystem:
- \`google.golang.org/grpc\` — \`grpc.NewServer(opts...)\`
- \`go.uber.org/zap\` — \`zap.New(core, opts...)\`
- \`net/http\` — \`http.Server{}\` uses struct approach, but many wrappers add options`,
        challenge:
          "Create a `Database` connection builder using functional options: `NewDatabase(dsn string, opts ...Option)`. Options should include `WithMaxIdleConns(n int)`, `WithMaxOpenConns(n int)`, `WithConnMaxLifetime(d time.Duration)`, `WithRetry(attempts int, delay time.Duration)`, and `WithLogger(logger *log.Logger)`. Add validation in each option. Write a test that creates a Database with different option combinations.",
        challengeHint:
          "Follow the pattern exactly: define `type Option func(*Database)`, create With* functions that return Option, set defaults in NewDatabase, then loop over opts to apply them. For validation, you can either panic (simple) or switch to the OptionErr variant and return errors.",
        resources: [
          {
            title: "Dave Cheney — Functional Options for Friendly APIs",
            url: "https://dave.cheney.net/2014/10/17/functional-options-for-friendly-apis",
            type: "article",
          },
          {
            title: "Rob Pike — Self-referential Functions and the Design of Options",
            url: "https://commandcenter.blogspot.com/2014/01/self-referential-functions-and-design-of.html",
            type: "article",
          },
          {
            title: "Uber Go Style Guide — Functional Options",
            url: "https://github.com/uber-go/guide/blob/master/style.md#functional-options",
            type: "github",
          },
        ],
        estimatedMinutes: 35,
      },
      {
        id: "concurrency-patterns",
        title: "Concurrency Patterns",
        description:
          "Master Pipeline, Fan-out/Fan-in, and Worker Pool patterns — the backbone of concurrent Go programs.",
        content: `## Concurrency Patterns

Go's goroutines and channels enable powerful concurrency patterns. These patterns are the building blocks of high-performance Go applications.

---

### Pipeline Pattern

A pipeline is a series of stages connected by channels. Each stage receives values from upstream, processes them, and sends results downstream.

\`\`\`go
package main

import "fmt"

// Stage 1: Generate numbers
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

// Stage 2: Square each number
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

// Stage 3: Filter — only pass even numbers
func filterEven(in <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        for n := range in {
            if n%2 == 0 {
                out <- n
            }
        }
        close(out)
    }()
    return out
}

func main() {
    // Build pipeline: generate → square → filter
    ch := filterEven(square(generate(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)))

    for result := range ch {
        fmt.Println(result) // 4, 16, 36, 64, 100
    }
}
\`\`\`

**Key rules:**
- Each stage runs in its own goroutine
- The producer closes the channel when done
- Consumers range over the channel

---

### Fan-out / Fan-in

**Fan-out:** Multiple goroutines read from the same channel to parallelize work.
**Fan-in:** Multiple channels are merged into a single channel.

\`\`\`go
package main

import (
    "fmt"
    "math/rand"
    "sync"
    "time"
)

// Simulate an expensive operation
func processItem(id int) string {
    duration := time.Duration(rand.Intn(500)) * time.Millisecond
    time.Sleep(duration)
    return fmt.Sprintf("item-%d (took %v)", id, duration)
}

// Fan-out: start N workers reading from the same channel
func fanOut(jobs <-chan int, numWorkers int) []<-chan string {
    workers := make([]<-chan string, numWorkers)
    for i := 0; i < numWorkers; i++ {
        workers[i] = worker(i, jobs)
    }
    return workers
}

func worker(id int, jobs <-chan int) <-chan string {
    results := make(chan string)
    go func() {
        defer close(results)
        for job := range jobs {
            results <- fmt.Sprintf("[worker %d] %s", id, processItem(job))
        }
    }()
    return results
}

// Fan-in: merge multiple channels into one
func fanIn(channels ...<-chan string) <-chan string {
    merged := make(chan string)
    var wg sync.WaitGroup

    for _, ch := range channels {
        wg.Add(1)
        go func(c <-chan string) {
            defer wg.Done()
            for val := range c {
                merged <- val
            }
        }(ch)
    }

    go func() {
        wg.Wait()
        close(merged)
    }()

    return merged
}

func main() {
    // Create 20 jobs
    jobs := make(chan int, 20)
    go func() {
        for i := 1; i <= 20; i++ {
            jobs <- i
        }
        close(jobs)
    }()

    // Fan-out to 4 workers, then fan-in results
    workers := fanOut(jobs, 4)
    results := fanIn(workers...)

    for result := range results {
        fmt.Println(result)
    }
}
\`\`\`

---

### Worker Pool Pattern

A worker pool limits the number of concurrent goroutines processing tasks.

\`\`\`go
package main

import (
    "context"
    "fmt"
    "sync"
    "time"
)

type Job struct {
    ID      int
    Payload string
}

type Result struct {
    JobID    int
    Output   string
    Duration time.Duration
}

func WorkerPool(ctx context.Context, numWorkers int, jobs <-chan Job) <-chan Result {
    results := make(chan Result)
    var wg sync.WaitGroup

    for i := 0; i < numWorkers; i++ {
        wg.Add(1)
        go func(workerID int) {
            defer wg.Done()
            for {
                select {
                case job, ok := <-jobs:
                    if !ok {
                        return // channel closed
                    }
                    start := time.Now()
                    // Simulate work
                    time.Sleep(100 * time.Millisecond)
                    output := fmt.Sprintf("worker %d processed: %s", workerID, job.Payload)

                    results <- Result{
                        JobID:    job.ID,
                        Output:   output,
                        Duration: time.Since(start),
                    }
                case <-ctx.Done():
                    return // context cancelled
                }
            }
        }(i)
    }

    go func() {
        wg.Wait()
        close(results)
    }()

    return results
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()

    jobs := make(chan Job, 10)
    go func() {
        for i := 1; i <= 10; i++ {
            jobs <- Job{ID: i, Payload: fmt.Sprintf("task-%d", i)}
        }
        close(jobs)
    }()

    results := WorkerPool(ctx, 3, jobs)

    for result := range results {
        fmt.Printf("Job %d: %s (%v)\\n", result.JobID, result.Output, result.Duration)
    }
}
\`\`\`

### When to Use Each Pattern

| Pattern | Use Case |
|---------|----------|
| **Pipeline** | Sequential data transformations (ETL, stream processing) |
| **Fan-out/Fan-in** | Parallelize independent operations (batch API calls) |
| **Worker Pool** | Limit concurrency (database connections, rate-limited APIs) |`,
        challenge:
          "Build an image processing pipeline (simulated): Stage 1 generates file paths. Stage 2 fans out to 4 workers that 'resize' images (simulate with a sleep and string transform). Stage 3 fans results into a single channel. Stage 4 'uploads' results. Add context cancellation so the pipeline can be stopped mid-way. Print the total processing time.",
        challengeHint:
          "Use `context.WithCancel()` and pass the context to each stage. In each goroutine, use `select` with `<-ctx.Done()` to check for cancellation. Measure total time with `time.Since(start)` in main.",
        resources: [
          {
            title: "Go Blog — Pipelines and Cancellation",
            url: "https://go.dev/blog/pipelines",
            type: "article",
          },
          {
            title: "Go Concurrency Patterns (Rob Pike talk)",
            url: "https://www.youtube.com/watch?v=f6kdp27TYZs",
            type: "video",
          },
          {
            title: "Go by Example — Worker Pools",
            url: "https://gobyexample.com/worker-pools",
            type: "article",
          },
        ],
        estimatedMinutes: 55,
      },
      {
        id: "repository-di-patterns",
        title: "Repository & Dependency Injection",
        description:
          "Learn how to structure Go applications with the Repository pattern and dependency injection for testable, maintainable code.",
        content: `## Repository & Dependency Injection Patterns

These patterns help you build applications that are easy to test, maintain, and extend.

---

### Repository Pattern

The Repository pattern abstracts data access behind an interface, separating business logic from storage details.

\`\`\`go
package main

import (
    "errors"
    "fmt"
    "sync"
    "time"
)

// Domain model
type User struct {
    ID        string
    Email     string
    Name      string
    CreatedAt time.Time
}

// Repository interface — defines WHAT operations are available
type UserRepository interface {
    Create(user *User) error
    GetByID(id string) (*User, error)
    GetByEmail(email string) (*User, error)
    Update(user *User) error
    Delete(id string) error
    List() ([]*User, error)
}

// In-memory implementation — useful for tests and prototyping
type InMemoryUserRepo struct {
    mu    sync.RWMutex
    users map[string]*User
}

func NewInMemoryUserRepo() *InMemoryUserRepo {
    return &InMemoryUserRepo{users: make(map[string]*User)}
}

func (r *InMemoryUserRepo) Create(user *User) error {
    r.mu.Lock()
    defer r.mu.Unlock()
    if _, exists := r.users[user.ID]; exists {
        return errors.New("user already exists")
    }
    r.users[user.ID] = user
    return nil
}

func (r *InMemoryUserRepo) GetByID(id string) (*User, error) {
    r.mu.RLock()
    defer r.mu.RUnlock()
    user, ok := r.users[id]
    if !ok {
        return nil, errors.New("user not found")
    }
    return user, nil
}

func (r *InMemoryUserRepo) GetByEmail(email string) (*User, error) {
    r.mu.RLock()
    defer r.mu.RUnlock()
    for _, user := range r.users {
        if user.Email == email {
            return user, nil
        }
    }
    return nil, errors.New("user not found")
}

func (r *InMemoryUserRepo) Update(user *User) error {
    r.mu.Lock()
    defer r.mu.Unlock()
    if _, exists := r.users[user.ID]; !exists {
        return errors.New("user not found")
    }
    r.users[user.ID] = user
    return nil
}

func (r *InMemoryUserRepo) Delete(id string) error {
    r.mu.Lock()
    defer r.mu.Unlock()
    delete(r.users, id)
    return nil
}

func (r *InMemoryUserRepo) List() ([]*User, error) {
    r.mu.RLock()
    defer r.mu.RUnlock()
    users := make([]*User, 0, len(r.users))
    for _, u := range r.users {
        users = append(users, u)
    }
    return users, nil
}
\`\`\`

In production, you'd also have a \`PostgresUserRepo\` implementing the same interface. Your business logic doesn't change — only the wiring.

---

### Dependency Injection

Go doesn't need a DI framework. Just pass dependencies as parameters to constructors.

\`\`\`go
// Service depends on interfaces, not concrete types
type UserService struct {
    repo     UserRepository
    emailer  EmailSender
    logger   Logger
}

// Constructor injects dependencies
func NewUserService(repo UserRepository, emailer EmailSender, logger Logger) *UserService {
    return &UserService{
        repo:    repo,
        emailer: emailer,
        logger:  logger,
    }
}

func (s *UserService) Register(email, name string) (*User, error) {
    // Check for existing user
    existing, _ := s.repo.GetByEmail(email)
    if existing != nil {
        return nil, fmt.Errorf("email %s already registered", email)
    }

    user := &User{
        ID:        generateID(), // some ID generator
        Email:     email,
        Name:      name,
        CreatedAt: time.Now(),
    }

    if err := s.repo.Create(user); err != nil {
        return nil, fmt.Errorf("creating user: %w", err)
    }

    s.logger.Log("info", fmt.Sprintf("user registered: %s", email))
    s.emailer.Send(email, "Welcome!", "Thanks for signing up, "+name)

    return user, nil
}
\`\`\`

### Wiring It All Together

\`\`\`go
func main() {
    // Production wiring
    db := connectToPostgres()
    repo := postgres.NewUserRepo(db)
    emailer := sendgrid.NewClient(os.Getenv("SENDGRID_KEY"))
    logger := zap.NewProduction()

    userService := NewUserService(repo, emailer, logger)

    // Start HTTP server with userService...
}

func setupTestService() *UserService {
    // Test wiring — swap real dependencies for fakes
    repo := NewInMemoryUserRepo()
    emailer := &FakeEmailer{}
    logger := &NoopLogger{}

    return NewUserService(repo, emailer, logger)
}
\`\`\`

### Interface Segregation

Keep interfaces small. Define them where they're consumed, not where they're implemented.

\`\`\`go
// ❌ Big interface — forces implementations to implement everything
type DataStore interface {
    CreateUser(u *User) error
    GetUser(id string) (*User, error)
    UpdateUser(u *User) error
    DeleteUser(id string) error
    CreateOrder(o *Order) error
    GetOrder(id string) (*Order, error)
    // ... 20 more methods
}

// ✅ Small, focused interfaces — define at the consumer
type UserGetter interface {
    GetUser(id string) (*User, error)
}

type UserCreator interface {
    CreateUser(u *User) error
}

// Handler only needs what it uses
type ProfileHandler struct {
    users UserGetter // not the full DataStore
}

// The same concrete type can satisfy both interfaces
type PostgresStore struct { db *sql.DB }
func (s *PostgresStore) GetUser(id string) (*User, error) { /* ... */ }
func (s *PostgresStore) CreateUser(u *User) error { /* ... */ }
\`\`\`

### The Key Principles

1. **Depend on interfaces, not concrete types**
2. **Define interfaces at the consumer, not the implementer**
3. **Keep interfaces small** — 1-3 methods is ideal
4. **Inject via constructors** — no global state, no DI frameworks
5. **Accept interfaces, return structs**`,
        challenge:
          "Build a complete mini-app: Create a `TodoRepository` interface with CRUD operations. Implement `InMemoryTodoRepo` and a `TodoService` that depends on the repository interface. Add a `TodoHandler` struct that exposes HTTP endpoints (GET /todos, POST /todos, DELETE /todos/{id}). Wire everything in main() and write a test using the in-memory implementation.",
        challengeHint:
          "Start with the Todo struct (ID, Title, Done, CreatedAt). Define the TodoRepository interface. Implement InMemoryTodoRepo. Build TodoService with business logic. Create TodoHandler that takes a TodoService. In tests, use NewInMemoryTodoRepo() and httptest for HTTP testing.",
        resources: [
          {
            title: "Go Wiki — Code Review Comments (Interfaces)",
            url: "https://go.dev/wiki/CodeReviewComments#interfaces",
            type: "docs",
          },
          {
            title: "Accept Interfaces, Return Structs",
            url: "https://bryanftan.medium.com/accept-interfaces-return-structs-in-go-d4cab29a301b",
            type: "article",
          },
          {
            title: "Standard Go Project Layout",
            url: "https://github.com/golang-standards/project-layout",
            type: "github",
          },
          {
            title: "How I Structure Go Services",
            url: "https://www.youtube.com/watch?v=MzTcsI6tn-0",
            type: "video",
          },
        ],
        estimatedMinutes: 60,
      },
    ],
  },
];
