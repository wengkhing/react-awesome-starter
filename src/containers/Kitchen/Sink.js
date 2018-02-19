import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import { Page, Section, H1, H2, H3, Button, Input } from '../../framework'

class KitchenSinkPage extends Component {
  render () {
    return (
      <Page className='scope-group-overview'>
        <Helmet title='React Awesome Starter: Kitchen Sink' />
        <Section>
          <H1>Buttons</H1>
          <Button>Cancel</Button>
          <Button to='/auth/login'>Router</Button>
          <Button color='primary'>Modify</Button>
          <Button color='success'>Accept</Button>
          <Button color='danger'>Reject</Button>
          <Button className='btn' disabled>Disabled</Button>
          <Button color='danger' block>Block Button</Button>
        </Section>
        <Section>
          <H1>Fonts</H1>
          <H2>Header 2</H2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nihil voluptatem quos nulla sed repudiandae, inventore totam atque harum esse, officiis placeat et quidem minima id nemo ducimus aut distinctio.</p>
          <H3>Header 3</H3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam maiores, similique fugiat vitae, reprehenderit veritatis sit, a explicabo temporibus officiis ipsum sint quam fugit quaerat voluptatibus dolorem quos blanditiis recusandae. Quam nisi, laudantium perspiciatis adipisci dicta, eos repellendus quos, ipsum aliquam minima quas iste iure voluptatum suscipit! Nostrum similique voluptatibus, reiciendis, ullam deserunt omnis perspiciatis cum molestiae dignissimos aperiam sunt! Praesentium fugiat exercitationem, in accusamus, ea alias. A, provident quasi quisquam aspernatur cumque. Ipsam ipsa eligendi, aspernatur odio reprehenderit consectetur placeat ut doloribus maiores ullam, dolore iusto. Autem earum, ut?</p>
        </Section>
        <Section>
          <H1>Input Elements</H1>
          <Input label='Email' placeholder='Email here' />
          <Input label='Password' type='password' placeholder='Password here' />
          <Input label='Email' placeholder='Email here' disabled />
        </Section>
      </Page>
    )
  }
}

function mapStateToProps (state) {
  return {
    state
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(KitchenSinkPage)
