#!/usr/bin/ruby -w

class Numerals
	
	def initialize
		@roman_numeral = {}
		@numeral = { 
			"I" => 1,
			"V" => 5,
			"X" => 10,
			"L" => 50,
			"C" => 100,
			"D" => 500,
			"M" => 1000
		}
	end

	def encodeNumeral(inputStr)
		inputArray = inputStr.split(" ")
		@roman_numeral[inputArray[0]] = inputArray[2]
		puts @roman_numeral
	end

	def encodeSymbol(numberCode)
		sum =0;
		i = 0
		if( ( numberCode =~ /(I{4,})|(X{4,}|C{4,}|M{4,})/ ) == 0)
			puts "Invalid input"
		
		else

			while i < numberCode.length do
				
				#puts "sum is #{sum}"
				case numberCode[i] 
				when "I"
				
					if(numberCode[i+1] == "V" || numberCode[i+1] == "X")
						sum += @numeral[numberCode[i+1]] - @numeral[numberCode[i]]
						i += 2
					else
						sum += @numeral[numberCode[i]]
						i += 1
					end

				when "X"
					if(numberCode[i+1] == "L" || numberCode[i+1] == "C")
						sum += @numeral[numberCode[i+1]] - @numeral[numberCode[i]]
						i += 2
					else
						sum += @numeral[numberCode[i]]
						i += 1
					end

				when "C"
					if(numberCode[i+1] == "L" || numberCode[i+1] == "C")
						sum += @numeral[numberCode[i+1]] - @numeral[numberCode[i]]
						i += 2
					else
						sum += @numeral[numberCode[i]]
						i += 1
					end

				when "V"
					sum += @numeral[numberCode[i]]
					i += 1
				when "L"

					sum += @numeral[numberCode[i]]
					i += 1
				when "D"

					sum += @numeral[numberCode[i]]
					i += 1
				when "M"

					sum += @numeral[numberCode[i]]
					i += 1

				else 
					sum *= @numeral[numberCode[i]]
					i += 1

				end
			end
		end
		return sum
	end 

	def encodeCredits(inputStr)
		numberCode = []
		lastIndex = 0
		value = 0
		sum = 0
		credits = 0
		inputArray = inputStr.split(" ")

		for i in 0..( inputArray.length ) do
			if ( @roman_numeral.has_key?(inputArray[i]) )
				lastIndex = i
				
				numberCode.push(@roman_numeral[inputArray[i]])
			
			elsif ( (inputArray[i] =~ /\d{1,}/) != nil )
				value = inputArray[i].to_i
			
			end

		end
		
		sum = encodeSymbol(numberCode)
		credits = value.to_f / sum
		@numeral[inputArray[lastIndex+1]] = credits
		@roman_numeral[inputArray[lastIndex+1]] = inputArray[lastIndex+1]
		puts @numeral
		puts @roman_numeral
	end

	def evaluateString(inputStr)
		inputArray = inputStr.split(" ")
		numberCode = []

		for i in 0..inputArray.length do
			if ( @roman_numeral.has_key?(inputArray[i]) )
				numberCode.push(@roman_numeral[inputArray[i]])
				print "#{inputArray[i]} "
			end
		end
		
		print "is "
		return encodeSymbol(numberCode)
	end

	def getInput()

		inputString = nil
		puts "Enter the input and type eoi in a new line to end input"
		inputString = gets.chomp
		while !( inputString.include? "eoi" ) do
		
			if ( (inputString =~ /((.*) is (I|V|X|C|L|M))/) != nil )
				encodeNumeral(inputString)

			elsif ( (inputString =~ /(\d{1,} (Credits|credits))$/) != nil )
				encodeCredits(inputString)

			elsif ( (inputString =~ /(^how (much|many) (.+) (Credits|credits) (.*) ?$)/) != nil )
				 puts "#{evaluateString(inputString)} Credits."

			elsif ( (inputString =~ /(^how(.+) (much|many) is (.*) ?$)/) != nil )
				 puts evaluateString(inputString)

			else
				puts "I have no idea what you are talking about"
			end
			inputString = gets.chomp
		end

		puts "End of input encountered."	
	end
end

numberObject = Numerals.new
numberObject.getInput()