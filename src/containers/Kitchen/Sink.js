import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import {
  Page,
  Layout,
  Section,
  H1,
  H2,
  H3,
  Breadcrumb,
  Crumb,
  Button,
  Input,
  Loader,
  MenuBar,
  MenuItem,
  Table
} from '../../framework'

import './Sink.scss'

const tableData = [{
  info: {
    first_name: 'John',
    last_name: 'Doe',
    username: 'johndoe'
  },
  age: '30',
  salary: '3000'
}]

const columns = [
  {label: 'Name'},
  {label: 'Username'},
  {label: 'Age'},
  {label: 'Salary ($)'}
]

class KitchenSinkPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false
    }

    this.updateLoadingState = this.updateLoadingState.bind(this)
  }

  updateLoadingState () {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  render () {
    return (
      <Page className='scope-kitchen-sink'>
        <Helmet title='React Awesome Starter: Kitchen Sink' />
        <Section>
          <H1>Breadcrumbs</H1>
          <Breadcrumb>
            <Crumb to='/kitchen/sink'>Home</Crumb>
            <Crumb to='/kitchen/sink'>Features</Crumb>
            <Crumb>Kitchen</Crumb>
          </Breadcrumb>
        </Section>
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
          <H1>Layout</H1>
          <Layout
            grid='100px auto 100px, 100px auto 100px'
            gap='5px 10px'
            areas={`
            "hd hd hd"
            "nv ct sb"
            "ft ft ft"`}
            smGrid='auto, auto auto'
            smAreas='
            "hd hd"
            "nv sb"
            "ct ct"
            "ft ft"'>
            <Section area='hd'
              style={{backgroundColor: '#3456ab'}}>
              <H3>Header</H3>
            </Section>
            <Section area='nv'
              style={{backgroundColor: '#ab3456'}}>
              <H3>Nav</H3>
            </Section>
            <Section area='sb'
              style={{backgroundColor: '#ab3456'}}>
              <H3>Sidebar</H3>
            </Section>
            <Section area='ct'
              style={{backgroundColor: '#56ab34'}}>
              <H3>Content</H3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sunt, accusantium, harum facere cum reprehenderit assumenda minus quis molestias, reiciendis natus! Cumque corporis dolor temporibus est, nam laboriosam facere laborum.
              Facilis incidunt obcaecati, quos laudantium odit iste explicabo architecto vel, alias quas saepe ab beatae veniam ea molestias maiores cum. Hic voluptas, esse aperiam alias vero, quo. Ipsa natus, odit.
              Voluptates iste atque nobis perspiciatis accusamus sunt dolorum temporibus odio, soluta? Cumque, est. Rem nulla doloremque esse natus, suscipit nam repellat, itaque numquam. Porro necessitatibus sed repellat, a asperiores fuga!</p>
            </Section>
            <Section area='ft'
              style={{backgroundColor: '#3456ab'}}>
              <H3>Footer</H3>
            </Section>
          </Layout>
        </Section>
        <Section>
          <H1>Loader</H1>
          <Loader isLoading={this.state.isLoading}
            duration={30000}
            strokeWidth={0.5}
            color='#cd4567' />
          <Input label='is loading' type='checkbox'
            value={this.state.isLoading}
            onChange={this.updateLoadingState} />
          <p>(See loading bar at top)</p>
        </Section>
        <Section>
          <H1>Menu Bar</H1>
          <MenuBar>
            <MenuItem to='/manage/group/overview' icon='tachometer'>Groups</MenuItem>
            <MenuItem icon='sign-out'>Logout</MenuItem>
          </MenuBar>
          <p>(See top)</p>
        </Section>
        <Section>
          <H1>Input Elements</H1>
          <Input label='Email' placeholder='Email here' />
          <Input label='Password' type='password' placeholder='Password here' />
          <Input label='Paid?' type='checkbox' />
          <Input label='Male' type='radio' name='gender' />
          <Input label='Female' type='radio' name='gender' />
          <Input label='Datetime' type='datetime-local' />
          <Input label='Number' type='number' />
          <Input label='Disabled' disabled />
          <Input label='Comments' type='textarea' rows='4' />
        </Section>
        <Section>
          <H1>Table</H1>
          <Table data={tableData}
            columns={columns} />
        </Section>
        <Section>
          <H1>Version Checker</H1>
          <p>Check if app version match with package version</p>
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
