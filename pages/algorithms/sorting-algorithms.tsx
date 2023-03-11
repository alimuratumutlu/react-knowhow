import React from 'react';
import Gist from 'react-gist';

import { Paragraph, SectionTitle } from '@components';
import PostTemplate from '@templates/Post.template';

export default function SortingAlgorithms() {
  return (
    <PostTemplate title="Sorting Algorithms">
      <Paragraph>
        Sorting algorithms are an important concept in computer science and programming. They
        provide a way to rearrange a collection of data elements into a specific order. Sorting
        algorithms are used in many different applications, such as searching, data compression, and
        data analysis. There are many different types of sorting algorithms, each with its own
        strengths and weaknesses, and each designed to solve specific problems.
      </Paragraph>

      <Paragraph>
        In general, a sorting algorithm is a way of rearranging a collection of data elements into a
        specific order. The choice of sorting algorithm depends on the specific problem that needs
        to be solved, as well as the constraints and requirements of the system.
      </Paragraph>

      <Paragraph>
        There are many different types of sorting algorithms, but here are some of the most commonly
        used ones:
      </Paragraph>
      <SectionTitle>Bubble Sort</SectionTitle>
      <Paragraph>
        Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares
        adjacent elements and swaps them if they are in the wrong order. The pass through the list
        is repeated until the list is sorted.
      </Paragraph>
      <Gist id="8f8475fcd8e4bca4be27024b6ae8e601" />
      <Paragraph>
        In this implementation, we first define a bubbleSort function that takes an array as its
        parameter. We then use two nested loops to iterate through the array and compare adjacent
        elements. If two adjacent elements are in the wrong order, we swap them using destructuring
        assignment. We repeat this process until the array is sorted and return the sorted array.
      </Paragraph>
      <Paragraph>
        We then provide an example usage of the bubbleSort function, where we create an unsorted
        array of numbers and call the bubbleSort function to sort the array. Finally, we log the
        sorted array to the console.
      </Paragraph>
      <SectionTitle>Selection Sort</SectionTitle>
      <Paragraph>
        Selection sort is an in-place comparison sorting algorithm that sorts an array by repeatedly
        finding the minimum element from unsorted part and putting it at the beginning.
      </Paragraph>
      <Gist id="467da7aa715dac372ff24b8c861dc78b" />
      <Paragraph>
        In this example, we start with an unsorted array arr of integers. The selectionSort function
        uses two nested loops to iterate over the array and find the minimum element from the
        unsorted part.
      </Paragraph>
      <Paragraph>
        The outer loop iterates through the array from the first to the second to last element. The
        inner loop iterates through the unsorted part of the array from the next element to the end.
      </Paragraph>
      <Paragraph>
        The inner loop compares each element to the current minimum element (arr[minIndex]) and
        updates the minimum index (minIndex) if it finds a smaller element.
      </Paragraph>
      <Paragraph>
        Once the inner loop is complete, the function checks if the minimum index has changed. If it
        has, it swaps the minimum element with the first element of the unsorted part of the array.
      </Paragraph>
      <Paragraph>
        The function repeats this process until the entire array is sorted, then returns the sorted
        array.
      </Paragraph>
      <SectionTitle>Insertion Sort</SectionTitle>
      <Paragraph>
        Insertion sort is another simple sorting algorithm that builds the final sorted array one
        item at a time. It is much less efficient on large lists than more advanced algorithms such
        as quicksort, heapsort, or merge sort.
      </Paragraph>

      <Gist id="afaa02e6c3d443941283500d2153329b" />

      <Paragraph>
        In this implementation, we start with the second element of the array and compare it to the
        elements before it to find its correct position. We do this by creating a variable called
        current to store the value of the current element, and a variable called j to keep track of
        the index of the element before current.
      </Paragraph>
      <Paragraph>
        We then loop through the elements before current (starting at j = i - 1) and shift each
        element one position to the right until we find an element that is less than or equal to
        current, at which point we insert current at the next index.
      </Paragraph>
      <Paragraph>
        We continue this process until we have gone through all the elements in the array, resulting
        in a sorted array.
      </Paragraph>
      <SectionTitle>Merge Sort</SectionTitle>
      <Paragraph>
        Merge sort is a divide-and-conquer algorithm that works by dividing the input array into
        smaller arrays, sorting these smaller arrays, and then merging them back into a single,
        sorted array.
      </Paragraph>
      <Gist id="e64bcb44861256a7603390306840ba93" />
      <Paragraph>
        This implementation uses recursion to divide the input array into smaller arrays, sorts them
        recursively, and then merges them back together using a merge function. The merge function
        iteratively compares the elements of the two input arrays and pushes the smaller element to
        the output array, until one of the input arrays has been completely processed. Then, it
        appends the remaining elements of the other input array to the output array.
      </Paragraph>

      <SectionTitle>Quick Sort</SectionTitle>
      <Paragraph>
        Quick sort is another divide-and-conquer algorithm that works by selecting a
        &apos;pivot&apos; element from the array and partitioning the other elements into two
        sub-arrays, according to whether they are less than or greater than the pivot.
      </Paragraph>
      <Gist id="7625ee9a2cb25d26beb94a8a53bb0554" />
      <Paragraph>
        {' '}
        In this implementation, we first check if the array has only one element or less, in which
        case it is already sorted and we can return it. Otherwise, we choose the first element of
        the array as the pivot and create two empty arrays, left and right, to hold the elements
        that are smaller than and greater than the pivot, respectively.
      </Paragraph>
      <Paragraph>
        We then iterate through the rest of the elements in the array, comparing them to the pivot
        and adding them to the appropriate sub-array. Finally, we recursively call quickSort on the
        left and right sub-arrays, and concatenate them along with the pivot to create the final
        sorted array.
      </Paragraph>

      <Paragraph>
        Note that this implementation is not very efficient for very large arrays, as it has a
        worst-case time complexity of O(n^2) if the pivot is consistently chosen poorly. However, it
        has an average case time complexity of O(n log n), which is quite good. There are also ways
        to optimize the choice of pivot to improve performance.
      </Paragraph>
    </PostTemplate>
  );
}
