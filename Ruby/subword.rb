#!/usr/bin/ruby -w
class Numbers
	def initialize
		@outputArray = []
		@@word_count = 0
	end

	def getInput()

		puts "Enter the input:"
		inputString = gets.chomp

		while ( (inputString =~ /^(EOF)$/i) != 0 )
			inputArray = inputString.split(" ")
			if( validateInput(inputString))
				findSubword(inputArray)
				puts "#{(inputString =~ /^(.*)(EOF)(.*)$/i)}"

				if( (inputString =~ /^(.*)(EOF)(.*)$/i) == nil )
					inputString = gets.chomp
				else
					break
				end
			end
		end
		displayOutput()
		puts "Ecountered end of input, #{@@word_count} words processed."
	end

	def displayOutput()
		puts outputArray
	end

	def findSubword(inputArray)
		outputStr = nil
		outputStr = "#{inputArray[0]} #{inputArray[1]}\n"

		inputArray[0].split("").uniq.permutation(inputArray[1]).to_a. each do |array|
			outputStr += (array * "")
			outputStr += "\n"
		end
		outputArray.push(outputStr)
	end

	def validateInput(inputArray)
		@@word_count += 1

		if( (inputArray[0] =~ /[a-zA-Z]/) != nil )
			@outputArray.push("Illegeal character in word")
			return false
		elsif( (inputArray[1] =~ /[0-9]/) != nil )
			@outputArray.push("Illegal character in number")
			return false
		elsif(inputArray[0].to_i > inputArray[0].length)
			@outputArray.push("Number greater than the length of the word")
			return false
		elsif( inputArray[0].length > 20 )
			@outputArray.push("Word greater than 20 characters")
			return false
		else
			reutrn true
		end
	end
end

numberObject = Numbers.new
numberObject.getInput()

	