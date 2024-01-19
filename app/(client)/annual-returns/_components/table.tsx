"use client"

import { useState } from "react"
import { Download, Loader } from "lucide-react"

interface TableProps {
  data: Data[]
}

interface onDownloadProps {
  name: string
  url: string
}

export const Table = ({ data }: TableProps) => {
  const [loading, setLoading] = useState(false)

  const onDownload = async ({ name, url }: onDownloadProps) => {
    setLoading(true)
    await fetch(url).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement("a")
        alink.href = fileURL
        alink.download = `Annual Returns for F.Y. ${name}.pdf`
        alink.click()
        alink.remove()
        setLoading(false)
      })
    })
  }

  if (data.length === 0) {
    return <p>No data available...</p>
  }

  return (
    <div className="space-y-3">
      {data.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center bg-gray-100 px-5 py-4"
        >
          <p>Annual Returns for F.Y. {item.year}</p>
          {loading ? (
            <Loader className="h-5 w-5 animate-spin" />
          ) : (
            <Download
              className="h-5 w-5 cursor-pointer"
              onClick={() => onDownload({ name: item.year, url: item.fileUrl })}
            />
          )}
        </div>
      ))}
    </div>
  )
}
