require 'rack/rewrite'

use Rack::Rewrite do
  rewrite "/", "/index.html"
  rewrite "/mobile", "/mobile.html"
end

run Rack::File.new("public")