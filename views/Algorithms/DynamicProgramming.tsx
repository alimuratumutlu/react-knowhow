import Link from 'next/link';
import { Text } from '@mantine/core';

import { CodeBlock, Paragraph, SectionTitle } from '@components';

const DynamicProgramming = (
  <>
    <Paragraph>
      Dynamic programming is a technique used to solve problems by breaking them down into smaller,
      simpler subproblems. The solutions to these subproblems are stored in memory and used to solve
      larger, more complex problems. It is an optimization technique that can be used to solve a
      wide variety of problems, such as finding the shortest path between two points, or the longest
      common subsequence of two strings.
    </Paragraph>
    <Paragraph>
      There are many different types of dynamic programming algorithms, each with its own strengths
      and weaknesses, and each designed to solve specific problems.{' '}
    </Paragraph>
    <Paragraph>
      In general, a dynamic programming algorithm is a way of breaking a problem down into smaller
      subproblems and storing the solutions to those subproblems in memory.
    </Paragraph>
    <SectionTitle>How Dynamic Programming Works?</SectionTitle>
    <Paragraph>
      Dynamic programming works by solving a problem recursively, but with a twist: it stores the
      solutions to the subproblems in memory, so that they can be reused when solving larger
      problems. This means that each subproblem only needs to be solved once, rather than multiple
      times. Dynamic programming algorithms typically follow a similar structure:
    </Paragraph>
    <Paragraph>
      <Text>1. Define the problem as a series of subproblems</Text>
      <Text>2. Identify the base case(s)</Text>
      <Text>
        3. Define a recurrence relation that describes the solution to each subproblem in terms of
        the solutions to smaller subproblems
      </Text>
      <Text>
        4. Use memoization or tabulation to store the solutions to the subproblems in memory
      </Text>
      <Text>5. Use the solutions to the subproblems to solve the larger problem</Text>
    </Paragraph>

    <Paragraph>
      Here are some examples of problems that can be solved using dynamic programming:
    </Paragraph>
    <SectionTitle>Fibonacci Sequence</SectionTitle>
    <Paragraph>
      The Fibonacci sequence is a series of numbers where each number is the sum of the two
      preceding numbers. The nth number in the Fibonacci sequence can be calculated using dynamic
      programming.
    </Paragraph>
    <CodeBlock>
      {`function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib.slice(0, n+1);
}

// Example usage:
console.log(fibonacci(10)); // Outputs [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]`}
    </CodeBlock>
    <Paragraph>
      In this implementation, we start with an array fib that contains the first two numbers in the
      sequence (0 and 1). We then use a for loop to generate the rest of the sequence up to the
      given number n. Each element fib[i] is calculated as the sum of the two preceding elements
      fib[i-1] and fib[i-2]. Finally, we return the subarray of fib that contains the sequence up to
      n.
    </Paragraph>
    <SectionTitle>Longest Common Subsequence</SectionTitle>
    <Paragraph>
      The longest common subsequence problem is to find the longest subsequence that is common to
      two sequences. This problem can be solved using dynamic programming by breaking it down into
      smaller subproblems.
    </Paragraph>
    <CodeBlock>
      {`function lcs(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const lcsTable = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        lcsTable[i][j] = lcsTable[i - 1][j - 1] + 1;
      } else {
        lcsTable[i][j] = Math.max(lcsTable[i][j - 1], lcsTable[i - 1][j]);
      }
    }
  }

  let lcs = "";
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (lcsTable[i - 1][j] > lcsTable[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  return lcs;
}`}
    </CodeBlock>
    <Paragraph>
      The lcs function takes two string arguments str1 and str2 and returns the longest common
      subsequence between them. It uses a two-dimensional array lcsTable to store the length of LCS
      of the prefixes of str1 and str2. The last element in lcsTable will store the length of the
      LCS of the full str1 and str2.
    </Paragraph>
    <Paragraph>
      The function then constructs the LCS by starting from the bottom-right cell of lcsTable and
      traversing back to the top-left cell, following the path with the maximum length.
    </Paragraph>
    <Paragraph>
      Note that this implementation has a time complexity of O(m * n) and a space complexity of O(m
      * n), where m and n are the lengths of the input strings.
    </Paragraph>
    <SectionTitle>Knapsack Problem</SectionTitle>
    <Paragraph>
      The knapsack problem is to find the maximum value of items that can be put into a knapsack of
      a given size. This problem can be solved using dynamic programming by breaking it down into
      smaller subproblems.
    </Paragraph>
    <CodeBlock>
      {`function knapsack(items, capacity) {
  const n = items.length;
  const dp = Array.from(Array(n + 1), () => Array(capacity + 1).fill(0));
 
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (items[i-1].weight <= j) {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - items[i-1].weight] + items[i-1].value);
      } else {
        dp[i][j] = dp[i-1][j];
      }
    }
  }
 
  const result = [];
  let i = n;
  let j = capacity;
 
  while (i > 0 && j > 0) {
    if (dp[i][j] !== dp[i-1][j]) {
      result.push(items[i-1]);
      j -= items[i-1].weight;
    }
    i--;
  }
 
  return result.reverse();
}
 
const items = [
  { name: "item1", weight: 2, value: 5 },
  { name: "item2", weight: 3, value: 6 },
  { name: "item3", weight: 4, value: 7 },
  { name: "item4", weight: 5, value: 8 },
  { name: "item5", weight: 6, value: 9 }
];
const capacity = 10;
 
const result = knapsack(items, capacity);
console.log(result); // [{ name: "item4", weight: 5, value: 8 }, { name: "item2", weight: 3, value: 6 }]`}
    </CodeBlock>
    <SectionTitle>Longest Increasing Subsequence</SectionTitle>
    <Paragraph>
      The longest increasing subsequence problem is to find the longest subsequence of a given
      sequence in which the subsequence&apos;s elements are in sorted order, lowest to highest, and
      in which the subsequence is as long as possible.
    </Paragraph>
    <Paragraph>
      In this implementation, we use a two-dimensional array dp to store the maximum value that can
      be achieved for each subproblem of considering the first i items and having a capacity of j.
      We compute the values of dp in a bottom-up manner by iterating over the items and capacities.
      Finally, we reconstruct the solution by tracing back the items that were selected to achieve
      the maximum value.
    </Paragraph>
    <SectionTitle>Matrix Chain Multiplication</SectionTitle>
    <Paragraph>
      The matrix chain multiplication problem is to find the most efficient way to multiply a given
      sequence of matrices. This problem can be solved using dynamic programming by breaking it down
      into smaller subproblems.
    </Paragraph>
    <SectionTitle>0-1 Knapsack Problem</SectionTitle>
    <Paragraph>
      The 0-1 knapsack problem is to find the maximum value of items that can be put into a knapsack
      of a given size. This problem can be solved using dynamic programming by breaking it down into
      smaller subproblems.
    </Paragraph>
    <SectionTitle>Shortest Common Supersequence</SectionTitle>
    <Paragraph>
      The shortest common supersequence problem is to find the shortest supersequence that is common
      to two sequences. This problem can be solved using dynamic programming by breaking it down
      into smaller subproblems.
    </Paragraph>
    <SectionTitle>Longest Palindromic Subsequence</SectionTitle>
    <Paragraph>
      The longest palindromic subsequence problem is to find the longest subsequence of a given
      sequence that is also a palindrome. This problem can be solved using dynamic programming by
      breaking it down into smaller subproblems.
    </Paragraph>
    <SectionTitle>Longest Repeating Subsequence</SectionTitle>
    <Paragraph>
      The longest repeating subsequence problem is to find the longest subsequence that is repeated
      in a given sequence. This problem can be solved using dynamic programming by breaking it down
      into smaller subproblems.
    </Paragraph>
    <SectionTitle>Longest Palindromic Substring</SectionTitle>
    <Paragraph>
      The longest palindromic substring problem is to find the longest substring of a given sequence
      that is also a palindrome. This problem can be solved using dynamic programming by breaking it
      down into smaller subproblems.
    </Paragraph>
    <SectionTitle>Word Break Problem</SectionTitle>
    <Paragraph>
      The word break problem is to find out if a given sequence of characters can be segmented into
      a space-separated sequence of one or more dictionary words. This problem can be solved using
      dynamic programming by breaking it down into smaller subproblems.
    </Paragraph>
    <SectionTitle>Subset Sum Problem</SectionTitle>
    <Paragraph>
      The subset sum problem is to find out if there is a subset of a given set with sum equal to a
      given number. This problem can be solved using dynamic programming by breaking it down into
      smaller subproblems.
    </Paragraph>
    <SectionTitle>Minimum Partition</SectionTitle>
    <Paragraph>
      The minimum partition problem is to find the minimum difference between the sum of two subsets
      of a given set. This problem can be solved using dynamic programming by breaking it down into
      smaller subproblems.
    </Paragraph>
    <SectionTitle>Longest Bitonic Subsequence</SectionTitle>
    <Paragraph>
      The longest bitonic subsequence problem is to find the longest bitonic subsequence of a given
      sequence. This problem can be solved using dynamic programming by breaking it down into
      smaller subproblems.
    </Paragraph>
    <SectionTitle>Count of subset sum with a given sum</SectionTitle>
    <Paragraph>
      The count of subset sum problem is to find the number of subsets of a given set with sum equal
      to a given number. This problem can be solved using dynamic programming by breaking it down
      into smaller subproblems.
    </Paragraph>
    <SectionTitle>Longest Common Substring</SectionTitle>
    <Paragraph>
      The longest common substring problem is to find the longest substring that is common to two
      strings. This problem can be solved using dynamic programming by breaking it down into smaller
      subproblems.
    </Paragraph>
    <SectionTitle>Maximum Sum Increasing Subsequence</SectionTitle>
    <Paragraph>
      The maximum sum increasing subsequence problem is to find the maximum sum of an increasing
      subsequence of a given sequence. This problem can be solved using dynamic programming by
      breaking it down into smaller subproblems.
    </Paragraph>
    <SectionTitle>Longest Alternating Subsequence</SectionTitle>
    <Paragraph>
      The longest alternating subsequence problem is to find the longest subsequence of a given
      sequence such that all elements of the subsequence are alternating. This problem can be solved
      using dynamic programming by breaking it down into smaller subproblems.
    </Paragraph>

    <SectionTitle>References</SectionTitle>
    <Paragraph>
      <Text>
        <Link href="https://en.wikipedia.org/wiki/Dynamic_programming">
          https://en.wikipedia.org/wiki/Dynamic_programming
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/dynamic-programming/">
          https://www.geeksforgeeks.org/dynamic-programming/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/fibonacci-number/">
          https://www.geeksforgeeks.org/fibonacci-number/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/">
          https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/">
          https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/">
          https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/">
          https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/">
          https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/longest-palindromic-substring-set-1/">
          https://www.geeksforgeeks.org/longest-palindromic-substring-set-1/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/longest-repeating-subsequence/">
          https://www.geeksforgeeks.org/longest-repeating-subsequence/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/word-break-problem-dp-32/">
          https://www.geeksforgeeks.org/word-break-problem-dp-32/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/subset-sum-problem-dp-25/">
          https://www.geeksforgeeks.org/subset-sum-problem-dp-25/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/partition-problem-dp-18/">
          https://www.geeksforgeeks.org/partition-problem-dp-18/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/longest-bitonic-subsequence-dp-15/">
          https://www.geeksforgeeks.org/longest-bitonic-subsequence-dp-15/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/">
          https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/longest-common-substring-dp-29/">
          https://www.geeksforgeeks.org/longest-common-substring-dp-29/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/maximum-sum-increasing-subsequence-dp-14/">
          https://www.geeksforgeeks.org/maximum-sum-increasing-subsequence-dp-14/
        </Link>
      </Text>
      <Text>
        <Link href="https://www.geeksforgeeks.org/longest-alternating-subsequence/">
          https://www.geeksforgeeks.org/longest-alternating-subsequence/
        </Link>
      </Text>
    </Paragraph>
  </>
);

export default DynamicProgramming;
