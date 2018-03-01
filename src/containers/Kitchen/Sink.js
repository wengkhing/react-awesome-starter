import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'
import { DELETE_GROUP_MODAL, ERROR_MODAL } from '../../components/ModalWrapper/ModalWrapper'
import { setModal } from '../../store/actions/app.action'

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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
    this.setState({isLoading: !this.state.isLoading})
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
          <Button to='/auth/login'>Route Button</Button>
          <Button to='/auth/login' disabled>Disabled Route Button</Button>
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
            grid='minmax(100px, 200px) auto minmax(100px, 200px) | auto auto auto '
            gap='5px 10px'
            areas='
            "hd hd hd"
            "nv ct sb"
            "ft ft ft"'
            smGrid='auto auto | auto'
            smAreas='
            "hd hd"
            "nv sb"
            "ct ct"
            "ft ft"'>
            <Section area='hd'
              style={{backgroundColor: '#789aab'}}>
              <H2>Header</H2>
              <p>Play with the browser width to see the layout responsiveness</p>
            </Section>
            <Section area='nv'
              style={{backgroundColor: '#ab789a'}}>
              <H3>Nav</H3>
            </Section>
            <Section area='sb'
              style={{backgroundColor: '#ab789a'}}>
              <H3>Sidebar</H3>
              <p>Default value is 950px</p>
            </Section>
            <Section area='ct'
              style={{backgroundColor: '#9aab78'}}>
              <H3>Content</H3>
              <p>Breakpoint variable($page-max-width) can be changed in src/framework/utils/_variables.scss</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sunt, accusantium, harum facere cum reprehenderit assumenda minus quis molestias, reiciendis natus! Cumque corporis dolor temporibus est, nam laboriosam facere laborum.
              Facilis incidunt obcaecati, quos laudantium odit iste explicabo architecto vel, alias quas saepe ab beatae veniam ea molestias maiores cum. Hic voluptas, esse aperiam alias vero, quo. Ipsa natus, odit.
              Voluptates iste atque nobis perspiciatis accusamus sunt dolorum temporibus odio, soluta? Cumque, est. Rem nulla doloremque esse natus, suscipit nam repellat, itaque numquam. Porro necessitatibus sed repellat, a asperiores fuga!</p>
            </Section>
            <Section area='ft'
              style={{backgroundColor: '#789aab'}}>
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
          <H1>Modal</H1>
          <Modal onMount={ref => (this.defaultModal = ref)}>
            <ModalHeader color='primary'>
              <H1>Modal Header</H1>
            </ModalHeader>
            <ModalBody>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quia itaque! Dolorem architecto, porro libero facere facilis ratione expedita obcaecati? Maxime, ratione quis obcaecati! Ad quae voluptates dolor deleniti omnis.</p>
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={() => this.defaultModal.hide()}>Alright!</Button>
              <Button onClick={() => this.defaultModal.hide()}>Close</Button>
            </ModalFooter>
          </Modal>
          <Modal onMount={ref => (this.customModal = ref)}>
            <H1>Custom Modal</H1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quia itaque! Dolorem architecto, porro libero facere facilis ratione expedita obcaecati? Maxime, ratione quis obcaecati! Ad quae voluptates dolor deleniti omnis.
              Temporibus officia illo veritatis quaerat culpa. Adipisci, voluptas, cupiditate? Minima delectus, quis fugit eius at aperiam dicta iure cupiditate mollitia, asperiores dolores sunt! Repudiandae qui, dolore adipisci provident, a minima.
              Perspiciatis iste fugit harum est magni suscipit? Eaque id perspiciatis ratione quod dicta ipsam deleniti quibusdam rerum esse possimus officia temporibus, itaque voluptates modi animi, nisi repellendus rem dolore hic!
              Mollitia recusandae repellendus, fuga! Rem consectetur deleniti sunt laudantium nihil perspiciatis, dolores repellendus sed, porro quis expedita harum doloremque. Consectetur eum culpa ipsa ut officiis, alias totam minus fugiat iste.
              Veritatis aperiam incidunt officiis? Porro architecto, cum et nobis. Tenetur provident sit, nulla aspernatur! Temporibus maiores ducimus, debitis laudantium quis consequatur, nam placeat dolorem reprehenderit fugit unde ipsum similique libero.
              Esse velit, nihil possimus maiores cupiditate, illo error ut. Repudiandae corporis, porro iure assumenda, nihil fugit temporibus vitae dolorem atque maxime reprehenderit recusandae quia eius fuga, at velit beatae vel.
              Dignissimos ut optio suscipit quasi nisi reiciendis, quos fuga assumenda ex veniam esse tempore nihil, perferendis mollitia. Numquam id modi, ex temporibus minima autem, quis explicabo nihil tempore quae maiores?
              Similique nulla illum sit facere necessitatibus deleniti consequuntur nemo autem sunt? Veniam voluptates vitae, optio vero tenetur labore! Saepe nisi non assumenda ad sit, iure dolores, quae in quidem commodi!
              Vitae perspiciatis a debitis dicta. Repellat excepturi delectus magnam ea eveniet minus quidem cupiditate sit distinctio sequi, impedit rem corporis? Id modi aspernatur laborum fuga accusamus officiis doloremque, eos nostrum.
              At, suscipit eos, harum eum ipsum placeat commodi quia sint cum nisi fugit sunt. Odio error impedit, consequuntur excepturi voluptates! Aliquam, aliquid nulla eligendi in voluptatum ipsa porro fugiat obcaecati.</p>
          </Modal>
          <Button onClick={() => this.defaultModal.show()}>Open Default Modal</Button>
          <Button color='primary' onClick={() => this.customModal.show()}>Open Custom Modal</Button>
          <Button onClick={() => this.props.setModal(DELETE_GROUP_MODAL)}>Redux Modal</Button>
          <Button color='danger' onClick={() => this.props.setModal(ERROR_MODAL)}>Redux Error Modal</Button>
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ setModal }, dispatch)
}

export default connect(null, mapDispatchToProps)(KitchenSinkPage)
