interface Base {
  _id: string
  _rev: string
  _type: string
  _createdAt: string
  _updatedAt: string
}

interface Reference {
  _ref: string
  _type: "reference"
}

interface File {
  _type: string
  asset: Reference
}

interface Data extends Base {
  year: string
  fileUrl: string
  file: File
}
