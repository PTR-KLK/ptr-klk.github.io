import React from "react"
import { Ul } from "./list.style"
import Project from "../project/project.component"

export default function List({ data }) {
  const { login, repositories } = data.githubData.data.user

  return (
    <Ul>
      {repositories.edges
        .filter(e => e.node.name !== login)
        .map(e => (
          <Project key={e.node.name} element={e} />
        ))}
    </Ul>
  )
}
