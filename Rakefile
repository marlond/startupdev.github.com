task :deploy do
  server = "railsapp@208.53.44.221"
  deploy_dir = "~/startupdev.com.br"

  system("cp .htaccess _site/")
  system("rsync -av --delete-excluded _site/ #{server}:#{deploy_dir}")
  system(%{ssh #{server} "find #{deploy_dir} -type f -print0 | xargs -0 chmod 644"})
end

task :staging do
  puts '=> Memorizing current branch name...'
  current_branch = `git branch | grep "*"`.gsub('*', '').strip

  puts '=> Remove staging branch...'
  system 'git branch -D staging'

  puts '=> Create orphan staging branch...'
  system 'git checkout --orphan staging'

  puts '=> Disallow robots...'
  File.open('robots.txt', 'w') { |file| file.write "User-agent: *\nDisallow: /" }

  puts '=> Change CNAME...'
  File.open('CNAME', 'w') { |file| file.write 'staging.startupdev.com.br' }

  puts '=> Add everything...'
  system 'git add --all'

  puts '=> Commit everything...'
  system 'git commit -m "Staging commit"'

  puts '=> Add staging remote...'
  system 'git remote add staging git@github.com:Helabs/staging.startupdev.com.br.git'

  puts '=> Force push to staging. Get some coffee, it may take some time...'
  system 'git push -f staging staging:gh-pages'

  puts "=> Checkout #{current_branch} branch..."
  system "git checkout #{current_branch}"

  puts '=> Done. It can take up to 10 minutes for your changes to appear staging.startupdev.com.br'
end
