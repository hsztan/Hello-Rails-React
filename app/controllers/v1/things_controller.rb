class V1::ThingsController < ApplicationController
  def index
    render json: { things: [{
      name: 'some-thing',
      guid: '04156f6e-f9b7-4f5b-b8f0-f9b7f5b8f0f9'
    }] }.to_json
  end
end
