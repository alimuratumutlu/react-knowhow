import React from 'react';
import Gist from 'react-gist';
import Link from 'next/link';
import { Text } from '@mantine/core';

import Paragraph from '../../components/atoms/Paragraph/Paragraph.component';
import SubTitle from '../../components/atoms/SubTitle/SubTitle.component';

import PostTemplate from '../../templates/Post.template';

export default function DynamicProgramming() {
  return (
    <PostTemplate title="Dynamic Programming">
      <Paragraph>
        Dynamic programming is a technique used to solve problems by breaking them down into
        smaller, simpler subproblems. The solutions to these subproblems are stored in memory and
        used to solve larger, more complex problems. It is an optimization technique that can be
        used to solve a wide variety of problems, such as finding the shortest path between two
        points, or the longest common subsequence of two strings.
      </Paragraph>
      <Paragraph>
        There are many different types of dynamic programming algorithms, each with its own
        strengths and weaknesses, and each designed to solve specific problems.{' '}
      </Paragraph>
      <Paragraph>
        In general, a dynamic programming algorithm is a way of breaking a problem down into smaller
        subproblems and storing the solutions to those subproblems in memory.
      </Paragraph>
      <SubTitle>How Dynamic Programming Works?</SubTitle>
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
      <SubTitle>Fibonacci Sequence</SubTitle>
      <Paragraph>
        The Fibonacci sequence is a series of numbers where each number is the sum of the two
        preceding numbers. The nth number in the Fibonacci sequence can be calculated using dynamic
        programming.
      </Paragraph>
      <Gist id="6aa16d5d901b412c36bcb93c70a1a56f" />
      <Paragraph>
        In this implementation, we start with an array fib that contains the first two numbers in
        the sequence (0 and 1). We then use a for loop to generate the rest of the sequence up to
        the given number n. Each element fib[i] is calculated as the sum of the two preceding
        elements fib[i-1] and fib[i-2]. Finally, we return the subarray of fib that contains the
        sequence up to n.
      </Paragraph>
      <SubTitle>Longest Common Subsequence</SubTitle>
      <Paragraph>
        The longest common subsequence problem is to find the longest subsequence that is common to
        two sequences. This problem can be solved using dynamic programming by breaking it down into
        smaller subproblems.
      </Paragraph>
      <Gist id="21b11f6333cc7afc5c588a076cf2cb8f" />
      <Paragraph>
        The lcs function takes two string arguments str1 and str2 and returns the longest common
        subsequence between them. It uses a two-dimensional array lcsTable to store the length of
        LCS of the prefixes of str1 and str2. The last element in lcsTable will store the length of
        the LCS of the full str1 and str2.
      </Paragraph>
      <Paragraph>
        The function then constructs the LCS by starting from the bottom-right cell of lcsTable and
        traversing back to the top-left cell, following the path with the maximum length.
      </Paragraph>
      <Paragraph>
        Note that this implementation has a time complexity of O(m * n) and a space complexity of
        O(m * n), where m and n are the lengths of the input strings.
      </Paragraph>
      <SubTitle>Knapsack Problem</SubTitle>
      <Paragraph>
        The knapsack problem is to find the maximum value of items that can be put into a knapsack
        of a given size. This problem can be solved using dynamic programming by breaking it down
        into smaller subproblems.
      </Paragraph>
      <Gist id="d5b1f4683f00cb5355ea7625f50f3247" />
      <SubTitle>Longest Increasing Subsequence</SubTitle>
      <Paragraph>
        The longest increasing subsequence problem is to find the longest subsequence of a given
        sequence in which the subsequence&apos;s elements are in sorted order, lowest to highest,
        and in which the subsequence is as long as possible.
      </Paragraph>
      <Paragraph>
        In this implementation, we use a two-dimensional array dp to store the maximum value that
        can be achieved for each subproblem of considering the first i items and having a capacity
        of j. We compute the values of dp in a bottom-up manner by iterating over the items and
        capacities. Finally, we reconstruct the solution by tracing back the items that were
        selected to achieve the maximum value.
      </Paragraph>
      <SubTitle>Matrix Chain Multiplication</SubTitle>
      <Paragraph>
        The matrix chain multiplication problem is to find the most efficient way to multiply a
        given sequence of matrices. This problem can be solved using dynamic programming by breaking
        it down into smaller subproblems.
      </Paragraph>
      <SubTitle>0-1 Knapsack Problem</SubTitle>
      <Paragraph>
        The 0-1 knapsack problem is to find the maximum value of items that can be put into a
        knapsack of a given size. This problem can be solved using dynamic programming by breaking
        it down into smaller subproblems.
      </Paragraph>
      <SubTitle>Shortest Common Supersequence</SubTitle>
      <Paragraph>
        The shortest common supersequence problem is to find the shortest supersequence that is
        common to two sequences. This problem can be solved using dynamic programming by breaking it
        down into smaller subproblems.
      </Paragraph>
      <SubTitle>Longest Palindromic Subsequence</SubTitle>
      <Paragraph>
        The longest palindromic subsequence problem is to find the longest subsequence of a given
        sequence that is also a palindrome. This problem can be solved using dynamic programming by
        breaking it down into smaller subproblems.
      </Paragraph>
      <SubTitle>Longest Repeating Subsequence</SubTitle>
      <Paragraph>
        The longest repeating subsequence problem is to find the longest subsequence that is
        repeated in a given sequence. This problem can be solved using dynamic programming by
        breaking it down into smaller subproblems.
      </Paragraph>
      <SubTitle>Longest Palindromic Substring</SubTitle>
      <Paragraph>
        The longest palindromic substring problem is to find the longest substring of a given
        sequence that is also a palindrome. This problem can be solved using dynamic programming by
        breaking it down into smaller subproblems.
      </Paragraph>
      <SubTitle>Word Break Problem</SubTitle>
      <Paragraph>
        The word break problem is to find out if a given sequence of characters can be segmented
        into a space-separated sequence of one or more dictionary words. This problem can be solved
        using dynamic programming by breaking it down into smaller subproblems.
      </Paragraph>
      <SubTitle>Subset Sum Problem</SubTitle>
      <Paragraph>
        The subset sum problem is to find out if there is a subset of a given set with sum equal to
        a given number. This problem can be solved using dynamic programming by breaking it down
        into smaller subproblems.
      </Paragraph>
      <SubTitle>Minimum Partition</SubTitle>
      <Paragraph>
        The minimum partition problem is to find the minimum difference between the sum of two
        subsets of a given set. This problem can be solved using dynamic programming by breaking it
        down into smaller subproblems.
      </Paragraph>
      <SubTitle>Longest Bitonic Subsequence</SubTitle>
      <Paragraph>
        The longest bitonic subsequence problem is to find the longest bitonic subsequence of a
        given sequence. This problem can be solved using dynamic programming by breaking it down
        into smaller subproblems.
      </Paragraph>
      <SubTitle>Count of subset sum with a given sum</SubTitle>
      <Paragraph>
        The count of subset sum problem is to find the number of subsets of a given set with sum
        equal to a given number. This problem can be solved using dynamic programming by breaking it
        down into smaller subproblems.
      </Paragraph>
      <SubTitle>Longest Common Substring</SubTitle>
      <Paragraph>
        The longest common substring problem is to find the longest substring that is common to two
        strings. This problem can be solved using dynamic programming by breaking it down into
        smaller subproblems.
      </Paragraph>
      <SubTitle>Maximum Sum Increasing Subsequence</SubTitle>
      <Paragraph>
        The maximum sum increasing subsequence problem is to find the maximum sum of an increasing
        subsequence of a given sequence. This problem can be solved using dynamic programming by
        breaking it down into smaller subproblems.
      </Paragraph>
      <SubTitle>Longest Alternating Subsequence</SubTitle>
      <Paragraph>
        The longest alternating subsequence problem is to find the longest subsequence of a given
        sequence such that all elements of the subsequence are alternating. This problem can be
        solved using dynamic programming by breaking it down into smaller subproblems.
      </Paragraph>

      <SubTitle>References</SubTitle>
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
    </PostTemplate>
  );
}
