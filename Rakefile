def ask(question)
  begin
    STDOUT.puts "#{question} (y/n)"
    input = STDIN.gets.strip.downcase
  end until %w(y n).include?(input)
  input
end

task :staging do
  answer = ask "Are your sure?"
  exit if answer == 'n'

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
