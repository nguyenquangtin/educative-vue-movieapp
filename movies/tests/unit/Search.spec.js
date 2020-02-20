import axios from 'axios'
import { shallowMount } from '@vue/test-utils'

import Search from '@/components/Search'

jest.mock('axios')

describe('components/Search', () => {
  it('Should send a request to the right API and append the search parameter', () => {
    const wrapper = shallowMount(Search)
    const input = wrapper.find('input')
    input.setValue('kingsman')

    const response = { status: 200, data: { Response: 'True' } }
    axios.get.mockImplementation(async () => response)

    input.trigger('keyup.enter')

    expect(axios.get).toHaveBeenCalledWith(`https://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_KEY}&s=kingsman`)
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
