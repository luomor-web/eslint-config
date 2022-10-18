function printList (head: any, _v: any) {
  const result = []
  while (head) {
    result.push(head.val)
    head = head.next
  }

  // eslint-disable-next-line no-console
  console.log('合并后的链表： ', result)
}

const str = 'typescript'
const arr = [1, 2, 3]
