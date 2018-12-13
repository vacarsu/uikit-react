import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { Article } from '../../components/Article/Article'

describe('<Article>', () => {
  it('Should render with only title and content', () => {
    const wrapper = renderer.create(<Article title="title">Lengthy Article.....</Article>)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('Should render with props', () => {
    const wrapper = renderer.create(
      <Article title="title" lead="lead" meta="meta">
        Lengthy Article.....
      </Article>,
    )

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
