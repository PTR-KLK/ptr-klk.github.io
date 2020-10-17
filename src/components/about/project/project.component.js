import React from "react"
import {
  Li,
  Hyperlink,
  Footer,
  Circle,
  TopicIcon,
  RepoIcon,
  DemoIcon,
  UpdatedIcon,
} from "./project.style"

export default function Project({ element }) {
  return (
    <Li>
      <h3>{element.node.name}</h3>
      {element.node.description ? <p>{element.node.description}</p> : null}
      {element.node.repositoryTopics.nodes.length > 0 ? (
        <ul>
          {element.node.repositoryTopics.nodes.map(e => (
            <li key={e.topic.name}>
              <Hyperlink href={e.url} target="_blank" rel="noopener noreferrer">
                <TopicIcon size={12} />
                <p>{e.topic.name}</p>
              </Hyperlink>
            </li>
          ))}
        </ul>
      ) : null}
      <Footer>
        <span>
          <UpdatedIcon size={24} />
          <p>{element.node.pushedAt.slice(0, 10).replace(/-/g, "/")}</p>
        </span>
        <span>
          <Circle color={element.node.primaryLanguage.color} />
          <p>{element.node.primaryLanguage.name}</p>
        </span>
        <Hyperlink
          href={element.node.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RepoIcon size={24} />
          <p>Repo</p>
        </Hyperlink>
        {element.node.homepageUrl ? (
          <Hyperlink
            href={element.node.homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DemoIcon size={24} />
            <p>Demo</p>
          </Hyperlink>
        ) : null}
      </Footer>
    </Li>
  )
}
